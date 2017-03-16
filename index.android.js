// React imports
import React, {Component} from 'react';
import {
    AppRegistry
} from 'react-native';

// UI componets imports
import MainScreen from './src/mainScreen/mainScreen'
import Login from './src/login/Login'
import IcarusCrawler from './src/icarusCrawler/IcarusCrawler'

export default class IcarusAegean extends Component {
    constructor(props) {
        super(props);
        this.state = {logged: false, allGrades: null};

        this.onLogin = this.onLogin.bind(this);
        this.logout = this.logout.bind(this);
    }

    onLogin(state, allGrades) {
        if (allGrades) {
            this.setState({allGrades: allGrades});
        }
        this.setState({logged: state});
        console.log(state ? 'Logged in' : 'Log in failed');
    }

    logout(){
        new IcarusCrawler().logout();
        this.setState({logged: false});
    }


    render() {
        if (this.state.logged) {
            return (
                <MainScreen ref="mainScreen" logout={this.logout} allGrades={this.state.allGrades}/>
            );
        }

        return (
            <Login ref="LoginComponent" onLogin={this.onLogin}/>
        );
    }
}

AppRegistry.registerComponent('IcarusAegean', () => IcarusAegean);
