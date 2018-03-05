// React imports
import React from 'react';

// UI components imports
import {Login} from '../../login'
import LoggedNav from './loggedNav';
import {SwitchNavigator} from 'react-navigation';

export default class Main extends React.Component {
    render() {
        let loginNavOptions = {header: null};

        let mainNavOptions = {header: null};

        const MainNavigator = SwitchNavigator({
            login: {screen: Login, navigationOptions: loginNavOptions},
            main: {screen: LoggedNav, navigationOptions: mainNavOptions},
        });

        return <MainNavigator onNavigationStateChange={null}/>;
    }
}
