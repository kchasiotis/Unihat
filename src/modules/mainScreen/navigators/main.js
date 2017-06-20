// React imports
import React, {Component} from 'react';

// UI components imports
import DrawerNavigator from './drawer'
import {Login} from '../../login'
import {StackNavigator} from 'react-navigation';

export default class Main extends Component {
    render() {
        let loginNavOptions = {
            headerLeft: null,
            headerStyle: {backgroundColor: '#3F51B5'},
            headerTitleStyle: {color: 'white'},
        };

        let mainNavOptions = {header: null};

        const MainNavigator = StackNavigator({
            Login: {screen: Login, navigationOptions: loginNavOptions},
            Main: {screen: DrawerNavigator, navigationOptions: mainNavOptions},
        });

        return <MainNavigator onNavigationStateChange={null}/>;
    }
}
