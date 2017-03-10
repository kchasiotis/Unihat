import React, {Component} from 'react';
import {Content, Item, Input, Button, Text} from 'native-base';
import IcarusCrawler from '../icarusCrawler/IcarusCrawler'
import userCredentials from '../icarusCrawler/.user'

export default class Login extends Component {
    icarusCrawler = null;

    constructor(props) {
        super(props);
        // this.state = {username: '', password: ''};
        this.state = {username: userCredentials.username, password: userCredentials.password};

        this.icarusCrawler = new IcarusCrawler();
        this.icarusCrawler.logout();

        this.login = this.login.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.onLoginResponse = this.onLoginResponse.bind(this);
    }

    onLoginResponse(state){
        this.props.onLogin(state);
    }

    login() {
        this.icarusCrawler.fetchPage(this.state.username, this.state.password, this.onLoginResponse);
    }

    handleUsername(text) {
        this.setState({username: text})
    }

    handlePassword(text) {
        this.setState({password: text})
    }

    render() {
        return (
            <Content>
                <Item regular>
                    <Input value={this.state.username} onChangeText={this.handleUsername} placeholder='Username'/>
                </Item>
                <Item regular>
                    <Input value={this.state.password} onChangeText={this.handlePassword} secureTextEntry
                           placeholder='Password'/>
                </Item>
                <Button onPress={this.login}>
                    <Text>Login</Text>
                </Button>
            </Content>
        );
    }
}