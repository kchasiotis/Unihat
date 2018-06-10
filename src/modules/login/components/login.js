import React from 'react';
import {View, StatusBar, Keyboard, ImageBackground} from 'react-native';

import {Item, Icon, Input, Button, Text} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import CredentialCheckbox from './credentialCheckbox';
import {CredentialStorage, LocalStorage} from '../../../tools/localStorage';
import {Logger} from '../../../tools/logger';

import env from '../../../../environment'
import 'react-native-console-time-polyfill';
import {LoginState} from '../actionTypes'

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);

        this.login = this.login.bind(this);

        if (env.debug && env.autoLogin && this.props.loginState !== LoginState.LOGGED_OUT) {
            this.state = {
                username: env.user.username,
                password: env.user.password,
                credentialCheckBox: true
            };
        } else {
            this.state = {username: '', password: '', credentialCheckBox: false};
        }

        this.firstRun = false;
        LocalStorage.loadFirstRun((err, flag) => {
            if (err) return Logger.error(err);
            this.firstRun = flag === null ? true : flag;
            LocalStorage.setFirstRun(false);
        });
    }

    componentDidMount() {
        if (env.debug && env.autoLogin && this.props.loginState !== LoginState.LOGGED_OUT) {
            setTimeout(() => this.login(), 1);
        }
    }

    componentWillMount() {
        if (this.props.loginState === LoginState.LOGGED_OUT) return;
        if (env.debug && env.autoLogin) return;

        LocalStorage.loadCredentialCheckbox((err, value) => {
            if (err) {
                Logger.log(err);
                return;
            }

            this.handleCheckbox(value);

            if (value === true) {
                // Load user credentials
                CredentialStorage.load((error, username, password) => {
                    if (error) {
                        Logger.error(error);
                        this.props.setLoginState(LoginState.LOADED_CREDENTIALS);
                        return;
                    }
                    // On login error set stored credentials
                    if (this.props.loginState === LoginState.NETWORK_ERROR) {
                        this.setState({username: username, password: password});
                        this.props.setLoginState(LoginState.LOADED_CREDENTIALS);
                    }

                    this.props.login(username, password, true);
                });
            } else {
                // Reset checkbox value
                CredentialStorage.reset();
                this.props.setLoginState(LoginState.LOADED_CREDENTIALS);
            }
        })
    }

    componentDidUpdate() {
        // Dispatch to main screen on log in
        if (this.props.loginState === LoginState.LOGGED_IN) {
            this.props.navigation.navigate('main', env.firstRunSettings ? {firstRun: this.firstRun} : {});
        }
    }

    login() {
        !env.debug || console.time("fetch");

        Keyboard.dismiss();
        this.props.login(this.state.username.toLowerCase(), this.state.password, this.state.credentialCheckBox);
    }

    handleUsername(text) {
        this.setState({username: text})
    }

    handlePassword(text) {
        this.setState({password: text})
    }

    handleCheckbox(state) {
        this.setState({credentialCheckBox: state});
        LocalStorage.setCredentialCheckbox(state);
    }

    render() {
        const {loginState} = this.props;
        const {LOGGED_IN, LOADING, FAILED, INITIAL, LOADED_CREDENTIALS, LOGGED_OUT, NETWORK_ERROR} = LoginState;

        let gui;

        switch (loginState) {
            case INITIAL:
                gui = (
                    <ImageBackground source={require('./background.png')} style={{width: undefined}}
                                     imageStyle={style.backgroundImage}>
                        <StatusBar
                            backgroundColor="#2137AA"
                            barStyle="light-content"
                        />
                    </ImageBackground>
                );
                break;
            case LOADED_CREDENTIALS:
            case LOGGED_OUT:
            case FAILED:
            case NETWORK_ERROR:
                gui = (
                    <ImageBackground source={require('./background.png')} style={{width: undefined}}
                                     imageStyle={style.backgroundImage}>
                        <StatusBar
                            backgroundColor="#2137AA"
                            barStyle="light-content"
                        />
                        <View style={style.main}>
                            <View style={style.content}>
                                {
                                    loginState === FAILED ?
                                        <View style={style.errorMessage}>
                                            <Text style={{color: 'white', textAlign: 'center'}}>Λάθος στοιχεία</Text>
                                        </View> :
                                        null
                                }
                                {
                                    loginState === NETWORK_ERROR ?
                                        <View style={style.errorMessage}>
                                            <Text style={{color: 'white', textAlign: 'center'}}>Πρόβλημα σύνδεσης στο
                                                διαδύκτιο</Text>
                                        </View> :
                                        null
                                }
                                <Item regular style={style.input}>
                                    <Icon active style={style.icon} name='person'/>
                                    <Input value={this.state.username} onChangeText={this.handleUsername}
                                           autoCapitalize='none' placeholder='Όνομα χρήστη'/>
                                </Item>
                                <Item regular style={style.input}>
                                    <Icon active style={style.icon} name='key'/>
                                    <Input value={this.state.password} onChangeText={this.handlePassword}
                                           secureTextEntry
                                           placeholder='Κωδικός'/>
                                </Item>
                                <View style={style.logButton.wrapper}>
                                    <Button full onPress={this.login}>
                                        <Text style={style.logButton.buttonText}>ΕΙΣΟΔΟΣ</Text>
                                    </Button>
                                </View>
                                <CredentialCheckbox
                                    handleCheckbox={this.handleCheckbox}
                                    value={this.state.credentialCheckBox}/>
                            </View>
                        </View>
                    </ImageBackground>
                );
                break;
            case LOGGED_IN:
                gui = null;
                break;
            case LOADING:
                gui = (
                    <View style={{flex: 1}}>
                        <StatusBar
                            backgroundColor="#2137AA"
                            barStyle="light-content"
                        />
                        <Spinner visible={true} textContent={"Loading..."} overlayColor='#3F51B5'
                                 textStyle={{color: 'white'}}/>
                    </View>
                );
                break;
            default:
                gui = <Text>Something went wrong with login</Text>
        }

        return gui;
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
        resizeMode: 'stretch',
        backgroundColor: 'white',
    },
    errorMessage: {
        backgroundColor: '#D9534F',
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 25,
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