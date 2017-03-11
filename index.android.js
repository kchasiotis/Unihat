// React imports
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
var ReactNative = require('react-native');
var {
    AsyncStorage,
} = ReactNative;

// UI componets imports
import {Container, Header, Title, Content, Button, Left, Right, Body, Icon} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import LessonList from './src/lessonList/lessonList'
import Login from './src/login/Login'

export default class IcarusAegean extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, logged: false, analyticGrading: [], screenName: 'Icarus Aegean'};

        this.onLogin = this.onLogin.bind(this);
        AsyncStorage.getItem('analyticGrades', (err, result) => {
            this.setState({loading: false});
            if(err) {
                console.log(err);
                return;
            }

            this.setState({analyticGrading: JSON.parse(result)});
        });
    }

    onLogin(state, analGrades) {
        this.setState({logged: state});
        console.log(state ? 'Logged in' : 'Log in failed');
        if (analGrades) {
            this.setState({analyticGrading: analGrades, screenName: 'Βαθμοί'});
            AsyncStorage.setItem('analyticGrades', JSON.stringify(analGrades));
        }
    }

    render() {
        if (this.state.loading)
            return (
                <View style={{ flex: 1 }}>
                    <Spinner visible={true} textContent={"Loading..."} textStyle={{color: '#FFF'}}/>
                </View>
            );

        let main = this.state.logged || this.state.analyticGrading.length > 0 ?
            <LessonList analyticGrading={this.state.analyticGrading}/> :
            <Login onLogin={this.onLogin}/>;

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>{this.state.screenName}</Title>
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
