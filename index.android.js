/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Container, Header, Title, Content, Button, Left, Right, Body, Icon} from 'native-base';
import LessonList from './src/lessonList/lessonList'
import Login from './src/login/Login'

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class IcarusAegean extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                    <Login/>
                </Content>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('IcarusAegean', () => IcarusAegean);
