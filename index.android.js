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
    constructor(props) {
        super(props);
        this.state = {logged: false};

        this.onLogin = this.onLogin.bind(this);
    }

    onLogin(state) {
        this.setState({logged: state});
        console.log(state ? 'Logged in' : 'Log in failed');
    }

    render() {
        let main = this.state.logged ? <LessonList/> : <Login onLogin={this.onLogin}/>;
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
                    {main}
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
