// React imports
import React, {Component} from 'react';

// UI components imports
import {Login} from '../../login'
import LoggedNav from './loggedNav';
import {StackNavigator} from 'react-navigation';

export default class Main extends Component {
    render() {
        let loginNavOptions = {header: null};

        let mainNavOptions = {header: null};

        const MainNavigator = StackNavigator({
            Login: {screen: Login, navigationOptions: loginNavOptions},
            Main: {screen: LoggedNav, navigationOptions: mainNavOptions},
        });

        return <MainNavigator onNavigationStateChange={null}/>;
    }
}
