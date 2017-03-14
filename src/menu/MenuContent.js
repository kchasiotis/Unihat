import React, {Component} from 'react';
import {ListItem, Left, Text, Body, Icon, Content} from 'native-base';

export default class MenuContent extends Component {
    constructor(props){
        super(props);

        this.menuItemHandler = this.menuItemHandler.bind(this);
    }

    menuItemHandler(choice){
        let func = this.props.setMenuItem;
        let closeMenu = this.props.closeMenu;
        return function () {
            closeMenu();
            func(choice);
        };
    }

    render() {
        return (
            <Content style={{backgroundColor: 'white'}}>
                <ListItem icon onPress={this.menuItemHandler(0)}>
                    <Left>
                        <Icon name="md-sunny"/>
                    </Left>
                    <Body>
                    <Text>Αναλυτική βαθμολογία</Text>
                    </Body>
                </ListItem>
                <ListItem icon onPress={this.menuItemHandler(1)}>
                    <Left>
                        <Icon name="md-sunny"/>
                    </Left>
                    <Body>
                    <Text>Περασμένα μαθήματα</Text>
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
                <ListItem icon onPress={this.props.logout}>
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