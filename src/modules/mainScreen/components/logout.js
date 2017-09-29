import React, {Component} from 'react';
import {Icon} from 'native-base';
import {Crawler} from '../../../tools/crawler';
import {CredentialStorage, LocalStorage} from '../../../tools/localStorage';
import {actionTypes} from '../../login';
import BackgroundJob from 'react-native-background-job';

export default class Logout extends Component {
    crawler = new Crawler();
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.setLoginState(actionTypes.LoginState.LOGGED_OUT);
        this.props.loginRoute();
        this.crawler.logout();
        BackgroundJob.cancelAll();
        CredentialStorage.reset();
        LocalStorage.setCredentialCheckbox(false);
    }

    render() {
        return (
            <Icon name="log-out" style={{paddingLeft: 15, paddingRight: 20, paddingTop: 5, paddingBottom: 5, color: 'white'}}
                  onPress={() => this.logout()}/>
        );
    }
}