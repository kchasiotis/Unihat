// React imports
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';
// var ReactNative = require('react-native');
// var {
//     AsyncStorage,
// } = ReactNative;

// UI componets imports
import {Container, Header, Title, Content, Body} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import MainScreen from './src/mainScreen/mainScreen'
import Login from './src/login/Login'
import IcarusCrawler from './src/icarusCrawler/IcarusCrawler'

export default class IcarusAegean extends Component {
    constructor(props) {
        super(props);
        this.state = {logged: false, analyticGrading: []};

        this.onLogin = this.onLogin.bind(this);
        this.logout = this.logout.bind(this);
        // AsyncStorage.getItem('analyticGrades', (err, result) => {
        //     this.setState({loading: false});
        //     if (err) {
        //         console.log(err);
        //         return;
        //     }
        //
        //     this.setState({analyticGrading: JSON.parse(result)});
        // });
    }

    onLogin(state, aGrades) {
        this.setState({logged: state});
        console.log(state ? 'Logged in' : 'Log in failed');
        if (aGrades) {
            this.setState({analyticGrading: aGrades});
            // AsyncStorage.setItem('analyticGrades', JSON.stringify(analGrades));
        }
    }

    logout(){
        new IcarusCrawler().logout();
        this.setState({logged: false});
    }

    render() {
        /*if (this.state.loading)
         return (
         <View style={{ flex: 1 }}>
         <Spinner visible={true} textContent={"Loading..."} textStyle={{color: '#FFF'}}/>
         </View>
         );
         */
        if (this.state.logged) {
            return <MainScreen logout={this.logout} aGrades={this.state.analyticGrading}/>
        }

        return (
            <Login ref="LoginComponent" onLogin={this.onLogin}/>
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
