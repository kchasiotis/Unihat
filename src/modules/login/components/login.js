import React, {Component} from 'react';
import {View, Image, StatusBar} from 'react-native';

import {Item, Icon, Input, Button, Text, Badge, ListItem, CheckBox} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import CredentialCheckbox from './credentialCheckbox';

import env from '../../../../environment'
import 'react-native-console-time-polyfill';
import {NavigationActions} from 'react-navigation'
import {LoginState} from '../actions'
import CredentialStorage from '../../../tools/credentialStorage'

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
        this.onCredentialsLoad = this.onCredentialsLoad.bind(this);
        // todo: move reset functionality to logout
        this.props.resetState();

        if (env.debug && env.autoLogin) {
            // todo: remove setTimeout
            this.componentDidMount = () => this.login();
            this.componentDidMount = this.componentDidMount.bind(this);

            this.state = {
                username: env.user.username,
                password: ''
            };
        } else {
            this.state = {username: '', password: '', credentialCheckBox: false};
        }
    }

    login() {
        !env.debug || console.time("fetch");

        this.props.login(this.state.username, this.state.password, this.state.credentialCheckBox);
    }

    componentDidUpdate() {
        // Dispatch to main screen on log in
        if (this.props.loginState === LoginState.LOGGED_IN) {
            CredentialStorage.set(this.state.username, this.state.password);

            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName: 'Main'})
                ]
            });

            this.props.navigation.dispatch(resetAction)
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
        const {loginState} = this.props;
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
                            handleCheckbox={this.handleCheckbox}
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