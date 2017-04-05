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
            header: {
                style: {backgroundColor: '#3F51B5'},
                titleStyle: {color: 'white'},
                left: null
            }
        };
        let mainNavOptions = {header: {visible: false}};

        const MainNavigator = StackNavigator({
            Login: {screen: Login, navigationOptions: loginNavOptions},
            Main: {screen: MainScreen, navigationOptions: mainNavOptions},
        });

        return <MainNavigator/>;
    }
}

AppRegistry.registerComponent('IcarusAegean', () => IcarusAegean);
