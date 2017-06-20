import React, {Component} from 'react';
import {View, AsyncStorage} from 'react-native';

import {Item, Icon, Input, Button, Text, Badge, ListItem, CheckBox} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import CredentialCheckbox from './credentialCheckbox';

import IcarusCrawler from '../../../tools/icarusCrawler/index'
import userCredentials from '../../../tools/icarusCrawler/.user'
import env from '../../../../environment/index'
import * as Keychain from 'react-native-keychain'
import 'react-native-console-time-polyfill';

export default class Login extends Component {
    icarusCrawler = null;
    static navigationOptions = {
        title: 'Icarus Aegean',
    };

    constructor(props) {
        super(props);
        this.icarusCrawler = new IcarusCrawler();

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);

        this.login = this.login.bind(this);
        this.onLoginHandle = this.onLoginHandle.bind(this);
        this.onCredentialsLoad = this.onCredentialsLoad.bind(this);

        if (env.debug === true) {
            this.componentDidMount = () => this.login();
            this.componentDidMount = this.componentDidMount.bind(this);

            this.state = {
                username: userCredentials.username,
                password: userCredentials.password,
                loading: false,
                loginState: null
            };
        } else {
            this.state = {username: '', password: '', loading: false, credentialCheckBox: false};
        }
    }

    login() {
        !env.debug || console.time("fetch");

        this.setState({loading: true});
        if (env.debug === true) {
            this.icarusCrawler.fetchMockPage(this.onLoginHandle)
        } else
            this.icarusCrawler.fetchPage(this.state.username, this.state.password, this.onLoginHandle);
    }

    logout() {
        this.icarusCrawler.logout();
    }

    onLoginHandle(response, aGrading) {
        !env.debug || console.timeEnd("fetch");

        this.setState({loading: false, loginState: response});
        if (response === true) {
            // Save credentials
            if (this.state.credentialCheckBox === true) {
                Keychain
                    .setGenericPassword(this.state.username, this.state.password)
                    .then(function () {
                        console.log('Credentials saved successfully!');
                    });
            }

            this.props.setGrades(aGrading);
            const {navigate} = this.props.navigation;
            navigate('Main');
        }
    }

    onCredentialsLoad(username, password) {
        this.setState({username: username, password: password})
    }

    handleUsername(text) {
        this.setState({username: text})
    }

    handlePassword(text) {
        this.setState({password: text})
    }

    handleCheckbox(state) {
        this.setState({credentialCheckBox: state})
    }

    render() {
        if (this.state.loading)
            return (
                <View style={{flex: 1}}>
                    <Spinner visible={true} textContent={"Loading..."} textStyle={{color: '#FFF'}}/>
                </View>
            );

        return (
            <View style={style.main}>
                {
                    this.state.loginState === false ?
                        <View>
                            <Badge danger>
                                <Text>Τα στοιχεία που εισάγατε είναι λάθος</Text>
                            </Badge>
                        </View> :
                        null
                }
                <Item regular>
                    <Icon active name='person'/>
                    <Input value={this.state.username} onChangeText={this.handleUsername}
                           placeholder='Όνομα χρήστη'/>
                </Item>
                <Item regular>
                    <Icon active name='key'/>
                    <Input value={this.state.password} onChangeText={this.handlePassword} secureTextEntry
                           placeholder='Κωδικός'/>
                </Item>
                <View style={style.logButton.wrapper}>
                    <Button rounded style={style.logButton.button} onPress={this.login}>
                        <Text style={style.logButton.buttonText}>ΕΙΣΟΔΟΣ</Text>
                    </Button>
                </View>
                <CredentialCheckbox ref='credentialCkb' handleCheckbox={this.handleCheckbox}
                                    onLoad={this.onCredentialsLoad}/>
            </View>
        );
    }
}

let style = {
    main: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%',
        backgroundColor:'white',
        paddingLeft: 40,
        paddingRight: 40
    },
    logButton: {
        wrapper: {
            width: '100%',
            paddingTop: 20
        },
        button: {
            width: '100%',
        },
        buttonText: {
            width: '100%',
            textAlign: 'center'
        }
    }
};