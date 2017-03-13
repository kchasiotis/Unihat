import React, {Component} from 'react';
import {ListItem, Left, Text, Body, Icon, Content} from 'native-base';

export default class MenuContent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Content style={{backgroundColor: 'white'}}>
                <ListItem icon onPress={this.props.logout}>
                    <Left>
                        <Icon name="md-exit"/>
                    </Left>
                    <Body>
                    <Text>Logout</Text>
                    </Body>
                </ListItem>
            </Content>
        );
    }
}