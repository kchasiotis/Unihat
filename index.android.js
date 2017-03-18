// React imports
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

// UI componets imports
import MainScreen from './src/mainScreen/mainScreen'
import Login from './src/login/Login'
import {StackNavigator} from 'react-navigation';

export default class IcarusAegean extends Component {
    render() {
        const MainNavigator = StackNavigator({
            Login: {screen: Login},
            Main: {screen: MainScreen},
        });

        return <MainNavigator/>;
    }
}

AppRegistry.registerComponent('IcarusAegean', () => IcarusAegean);
