import React, {Component} from 'react';
import {View, Image, StatusBar, Keyboard} from 'react-native';

import {Item, Icon, Input, Button, Text, Badge, ListItem, CheckBox} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import CredentialCheckbox from './credentialCheckbox';
import {CredentialStorage, LocalStorage} from '../../../tools/localStorage';

import env from '../../../../environment'
import 'react-native-console-time-polyfill';
import {NavigationActions} from 'react-navigation'
import {LoginState} from '../actions'

export default class Login extends Component {
    static navigationOptions = {
        title: 'Icarus Aegean',
    };

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
    }

    componentDidMount(){
        if (env.debug && env.autoLogin && this.props.loginState !== LoginState.LOGGED_OUT) {
            setTimeout(() => this.login(), 1);
        }
    }

    componentWillMount() {
        if (this.props.loginState === LoginState.LOGGED_OUT) return;
        if (env.debug && env.autoLogin) return;

        LocalStorage.loadCredentialCheckbox((err, value) => {
            if (err) {
                console.log(err);
                return;
            }

            this.handleCheckbox(value);

            if (value === true) {
                // Load user credentials
                CredentialStorage.load((error, username, password) => {
                    if (error) {
                        console.log(error);
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
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName: 'Main'})
                ]
            });

            this.props.navigation.dispatch(resetAction)
        }
    }

    login() {
        !env.debug || console.time("fetch");

        Keyboard.dismiss();
        this.props.login(this.state.username, this.state.password, this.state.credentialCheckBox);
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
                    <Image source={require('./background.png')} style={style.backgroundImage}>
                        <StatusBar
                            backgroundColor="#2137AA"
                            barStyle="light-content"
                        />
                    </Image>
                );
                break;
            case LOADED_CREDENTIALS:
            case LOGGED_OUT:
            case FAILED:
            case NETWORK_ERROR:
                gui = (
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
                                                <Text>Λάθος στοιχεία</Text>
                                            </Badge>
                                        </View> :
                                        null
                                }
                                {
                                    loginState === NETWORK_ERROR ?
                                        <View style={style.errorMessage}>
                                            <Badge danger>
                                                <Text>Πρόβλημα σύνδεσης στο διαδύκτιο</Text>
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
                    </Image>
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
        width: '100%',
        resizeMode: 'stretch',
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