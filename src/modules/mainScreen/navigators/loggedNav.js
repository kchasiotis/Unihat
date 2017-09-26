import React, {Component} from 'react';

import LessonsTabNav from './lessonTabNav'
import {Lesson} from '../../lesson'
import {Logout} from '../containers/logout'
import {NavigationActions, StackNavigator} from 'react-navigation';

export default class LoggedNav extends Component {
    constructor(props) {
        super(props);
        this.loginRoute = this.loginRoute.bind(this);
    }

    loginRoute() {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'Login'})
            ]
        });
        this.props.navigation.dispatch(resetAction)
    }


    render() {
        Logout.defaultProps = {loginRoute: this.loginRoute};

        const MenuNavigator = StackNavigator({
            screenNavigator: {screen: LessonsTabNav()},
            lesson: {screen: Lesson}
        }, {
            navigationOptions: ({navigation}) => ({
                headerTitle: 'Unihat',
                headerTintColor: '#f86624',
                headerRight: <Logout navigation={navigation}/>,
                headerStyle: {backgroundColor: '#3F51B5'},
                headerTitleStyle: {color: 'white'},
            }),
        });

        return <MenuNavigator onNavigationStateChange={null}/>
    }
}