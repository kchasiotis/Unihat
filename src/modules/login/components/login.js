import React, {Component} from 'react';
import {View, Image} from 'react-native';

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

        if (env.debug && env.autoLogin) {
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
        if (env.debug && env.mockPage.fetch) {
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
                    <Spinner visible={true} textContent={"Loading..."} overlayColor='#3F51B5' textStyle={{color: 'white'}}/>
                </View>
            );

        return (
            <Image source={require('./background.png')} style={style.backgroundImage}>
                <View style={style.main}>
                    <View style={style.content}>
                        {
                            this.state.loginState === false ?
                                <View style={style.errorMessage}>
                                    <Badge danger>
                                        <Text>Τα στοιχεία που εισάγατε είναι λάθος</Text>
                                    </Badge>
                                </View> :
                                null
                        }
                        <Item regular style={style.input}>
                            <Icon active style={style.icon} name='person'/>
                            <Input value={this.state.username} onChangeText={this.handleUsername}
                                   placeholder='Όνομα χρήστη'/>
                        </Item>
                        <Item regular style={style.input}>
                            <Icon active style={style.icon} name='key'/>
                            <Input value={this.state.password} onChangeText={this.handlePassword} secureTextEntry
                                   placeholder='Κωδικός'/>
                        </Item>
                        <View style={style.logButton.wrapper}>
                            <Button full onPress={this.login}>
                                <Text style={style.logButton.buttonText}>ΕΙΣΟΔΟΣ</Text>
                            </Button>
                        </View>
                        <CredentialCheckbox
                            ref='credentialCkb' handleCheckbox={this.handleCheckbox}
                                            onLoad={this.onCredentialsLoad}/>
                    </View>
                </View>
            </Image>
        );
    }
}

let style = {
    main: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%',
        paddingLeft: 40,
        paddingRight: 40
    },
    content: {
        marginTop: '-15%',
        alignItems: 'center'
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        resizeMode: 'stretch', // or 'stretch'
        backgroundColor: 'white',
    },
    errorMessage: {
        marginTop: -60,
        marginBottom: 20
    },
    logButton: {
        wrapper: {
            width: '100%',
            paddingTop: 20
        },
        buttonText: {
            width: '100%',
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: 1
        }
    },
    input: {
        backgroundColor: 'white'
    },
    icon: {
        color: '#3F51B5'
    }
};