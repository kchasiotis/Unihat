import React, {Component} from 'react';
import {ListItem, Left, Text, Body, Icon, Content, Thumbnail} from 'native-base';
import {View, AsyncStorage} from 'react-native';
import Crawler from '../../../tools/crawler';
import {actionTypes} from '../../login';

export default class MenuContent extends Component {
    crawler = new Crawler();
    constructor(props){
        super(props);

        this.menuItemHandler = this.menuItemHandler.bind(this);
        this.logout = this.logout.bind(this);
    }

    menuItemHandler(screen) {
        let pr = this.props;

        return function () {
            pr.navigation.navigate(screen);
        };
    }

    logout() {
        this.props.setLoginState(actionTypes.LoginState.LOGGED_OUT);
        this.props.loginRoute();
        this.crawler.logout();
        AsyncStorage.setItem('credentialCheckBox', JSON.stringify(false));
    }

    render() {
        return (
            <Content style={{backgroundColor: 'white'}}>
                <View style={{paddingTop:10,paddingBottom:10,alignItems:'center'}}>
                    <Thumbnail source={require('../resources/icarus.png')} large/>
                </View>
                <ListItem icon onPress={this.menuItemHandler('aGrades')}>
                    <Left>
                        <Icon name="sunny"/>
                    </Left>
                    <Body>
                    <Text>Αναλυτική βαθμολογία</Text>
                    </Body>
                </ListItem>
                <ListItem icon onPress={this.menuItemHandler('exGrades')}>
                    <Left>
                        <Icon name="snow"/>
                    </Left>
                    <Body>
                    <Text>Εξεταστική</Text>
                    </Body>
                </ListItem>
                <ListItem icon onPress={this.menuItemHandler('chartScreen')}>
                    <Left>
                        <Icon name="pulse"/>
                    </Left>
                    <Body>
                    <Text>Γραφήματα</Text>
                    </Body>
                </ListItem>
                <ListItem icon onPress={this.logout}>
                    <Left>
                        <Icon name="log-out"/>
                    </Left>
                    <Body>
                    <Text>Αποσύνδεση</Text>
                    </Body>
                </ListItem>
            </Content>
        );
    }
}