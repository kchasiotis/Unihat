import React, {Component} from 'react';
import {ListItem, Left, Text, Body, Icon, Content} from 'native-base';
import IcarusCrawler from '../icarusCrawler/IcarusCrawler';

export default class MenuContent extends Component {
    IcarusClient = new IcarusCrawler();
    constructor(props){
        super(props);

        this.menuItemHandler = this.menuItemHandler.bind(this);
        this.logout = this.logout.bind(this);
    }

    menuItemHandler(choice){
        let pr = this.props;
        let screen;
        switch (choice){
            case 1:
                screen = 'aGrades';
                break;
            case 2:
                screen = 'exGrades';
                break;
            case 3:
                screen = 'emGrades';
                break;
        }
        return function () {
            pr.navigation.navigate('DrawerClose');
            pr.navigation.navigate(screen);
        };
    }

    logout(){
        this.props.loginRoute();
        this.IcarusClient.logout();
    }

    render() {
        return (
            <Content style={{backgroundColor: 'white'}}>
                <ListItem icon onPress={this.menuItemHandler(1)}>
                    <Left>
                        <Icon name="md-sunny"/>
                    </Left>
                    <Body>
                    <Text>Αναλυτική βαθμολογία</Text>
                    </Body>
                </ListItem>
                <ListItem icon onPress={this.menuItemHandler(2)}>
                    <Left>
                        <Icon name="md-snow"/>
                    </Left>
                    <Body>
                    <Text>Εξεταστική</Text>
                    </Body>
                </ListItem>
                <ListItem icon onPress={this.menuItemHandler(3)}>
                    <Left>
                        <Icon name="md-snow"/>
                    </Left>
                    <Body>
                    <Text>Εμβόλιμη</Text>
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