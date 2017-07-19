import React, {Component} from 'react';
import {View, Image, StatusBar} from 'react-native';

import {Item, Icon, Input, Button, Text, Badge, ListItem, CheckBox} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import CredentialCheckbox from './credentialCheckbox';

import Crawler from '../../../tools/crawler'
import env from '../../../../environment/index'
import * as Keychain from 'react-native-keychain'
import 'react-native-console-time-polyfill';
import {NavigationActions} from 'react-navigation'

LoginState = {
    INITIAL: 'INITIAL',
    LOADING: 'LOADING',
    LOGGED_IN: 'LOGGED_IN',
    FAILED: 'FAILED'
};

export default class Login extends Component {
    crawler = null;
    static navigationOptions = {
        title: 'Icarus Aegean',
    };

    constructor(props) {
        super(props);
        this.crawler = new Crawler();

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
                username: 'math13028',
                password: 'test',
                loginState: LoginState.LOADING
            };
        } else {
            this.state = {username: '', password: '', loading: LoginState.INITIAL, credentialCheckBox: false};
        }
    }

    login() {
        !env.debug || console.time("fetch");

        this.setState({loginState: LoginState.LOADING});
        if (env.debug && env.mockPage.fetch) {
            this.crawler.fetchMockPage(this.state.username, this.onLoginHandle)
        } else
            this.crawler.fetchPage(this.state.username, this.state.password, this.onLoginHandle);
    }

    logout() {
        this.crawler.logout();
    }

    onLoginHandle(response, aGrading) {
        !env.debug || console.timeEnd("fetch");

        if (response === true) {
            // Save credentials
            Keychain
                .setGenericPassword(this.state.username, this.state.password)
                .then(function () {
                    console.log('Credentials saved successfully!');
                });

            //Set grades to redux
            this.props.setGrades(aGrading);

            // Dispatch to main screen
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName: 'Main'})
                ]
            });

            this.setState({loginState: LoginState.LOGGED_IN}, () =>
                this.props.navigation.dispatch(resetAction)
            );

        } else {
            this.setState({loginState: LoginState.FAILED});
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
        const {loginState} = this.state;
        const {LOGGED_IN, LOADING, FAILED} = LoginState;

        if (loginState === LOGGED_IN) return null;

        if (loginState === LOADING)
            return (
                <View style={{flex: 1}}>
                    <StatusBar
                        backgroundColor="#2137AA"
                        barStyle="light-content"
                    />
                    <Spinner visible={true} textContent={"Loading..."} overlayColor='#3F51B5'
                             textStyle={{color: 'white'}}/>
                </View>
            );

        return (
            <Image source={require('./background.png')} style={style.backgroundImage}>
                <StatusBar
                    backgroundColor="#2137AA"
                    barStyle="light-content"
                />
                <View style={style.main}>
                    <View style={style.content}>
                        {
                            loginState === FAILED ?
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