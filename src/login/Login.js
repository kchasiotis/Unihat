import React, {Component} from 'react';
import {View, AsyncStorage} from 'react-native';

import {Item, Input, Button, Text, Badge, ListItem, CheckBox} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import Br from '../br/Br';

import IcarusCrawler from '../icarusCrawler/IcarusCrawler'
import userCredentials from '../icarusCrawler/.user'
import env from '../environment/index'
import * as Keychain from 'react-native-keychain';

export default class Login extends Component {
    icarusCrawler = null;
    static navigationOptions = {
        title: 'Icarus Aegean',
    };

    constructor(props) {
        super(props);
        this.icarusCrawler = new IcarusCrawler();

        this.login = this.login.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.onLoginHandle = this.onLoginHandle.bind(this);
        this.loadCredentials = this.loadCredentials.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);

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

            // todo: set manual render on load
            // Load checkbox value
            AsyncStorage.getItem('credentialCheckBox', (err, result) => {
                if (result === null || err) return;

                let toBoolean = result === 'true';
                this.setState({credentialCheckBox: toBoolean});

                // Load user credentials
                if (toBoolean === true) this.loadCredentials();
                else {
                    // Reset checkbox value
                    Keychain
                        .resetGenericPassword()
                        .then(function () {
                            console.log('Credentials successfully deleted');
                        });
                }
            });
        }
    }

    loadCredentials() {
        Keychain
            .getGenericPassword()
            .then(function (credentials) {
                this.setState({username: credentials.username, password: credentials.password})
            }.bind(this))
            .catch(function (error) {
                console.log('Keychain couldn\'t be accessed! Maybe no value set?', error);
            });
    }

    login() {
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
        this.setState({loading: false, loginState: response});
        if (response === true) {
            if (this.state.credentialCheckBox === true) {
                Keychain
                    .setGenericPassword(this.state.username, this.state.password)
                    .then(function () {
                        console.log('Credentials saved successfully!');
                    });
            }

            const {navigate} = this.props.navigation;
            navigate('Main', {allGrades: aGrading});
        }
    }

    handleUsername(text) {
        this.setState({username: text})
    }

    handlePassword(text) {
        this.setState({password: text})
    }

    handleCheckbox() {
        let value = !this.state.credentialCheckBox;
        this.setState({credentialCheckBox: value});
        AsyncStorage.setItem('credentialCheckBox', JSON.stringify(value));
    }

    render() {
        if (this.state.loading)
            return (
                <View style={{flex: 1}}>
                    <Spinner visible={true} textContent={"Loading..."} textStyle={{color: '#FFF'}}/>
                </View>
            );

        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <Br/>
                {
                    this.state.loginState === false ?
                        <View>
                            <Badge danger>
                                <Text>Τα στοιχεία που εισάγατε είναι λάθος</Text>
                            </Badge>
                        </View> :
                        <Br/>
                }
                <Item regular>
                    <Input value={this.state.username} onChangeText={this.handleUsername}
                           placeholder='Όνομα χρήστη'/>
                </Item>
                <Item regular>
                    <Input value={this.state.password} onChangeText={this.handlePassword} secureTextEntry
                           placeholder='Κωδικός'/>
                </Item>
                <ListItem>
                    <CheckBox onPress={this.handleCheckbox} checked={this.state.credentialCheckBox}/>
                    <Text> Αποθήκευση στοιχείων</Text>
                </ListItem>
                <View>
                    <Button onPress={this.login}>
                        <Text>Είσοδος</Text>
                    </Button>
                </View>
            </View>
        );
    }
}