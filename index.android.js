// React imports
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

// UI components imports
import MainScreen from './src/mainScreen/mainScreen'
import Login from './src/login/Login'
import {StackNavigator} from 'react-navigation';

export default class IcarusAegean extends Component {
    render() {
        let navOptions = {
            header: {
                style: {backgroundColor: '#3F51B5'},
                titleStyle: {color: 'white'},
                left: null
            }
        };

        const MainNavigator = StackNavigator({
            Login: {screen: Login, navigationOptions: navOptions},
            Main: {screen: MainScreen, navigationOptions: navOptions},
        });

        return <MainNavigator/>;
    }
}

AppRegistry.registerComponent('IcarusAegean', () => IcarusAegean);
