// React imports
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

// UI components imports
import MainScreen from './src/mainScreen/mainScreen'
import Login from './src/login/Login'
import {StackNavigator} from 'react-navigation';

export default class IcarusAegean extends Component {
    render() {
        let loginNavOptions = {
            headerLeft: null,
            headerStyle: {backgroundColor: '#3F51B5'},
            headerTitleStyle: {color: 'white'},
        };

        let mainNavOptions = {header: null};

        const MainNavigator = StackNavigator({
            Login: {screen: Login, navigationOptions: loginNavOptions},
            Main: {screen: MainScreen, navigationOptions: mainNavOptions},
        });

        return <MainNavigator onNavigationStateChange={null}/>;
    }
}

AppRegistry.registerComponent('IcarusAegean', () => IcarusAegean);
