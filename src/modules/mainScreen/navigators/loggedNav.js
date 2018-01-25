import React from 'react';

import LessonsTabNav from './lessonTabNav'
import {Lesson} from '../../lesson'
import {Filter} from '../../lessonList'
import {Logout} from '../containers/logout'
import {NavigationActions, StackNavigator} from 'react-navigation';

export default class LoggedNav extends React.Component {
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
            filter: {screen: Filter, navigationOptions: {headerTitle: 'Φίλτρα', headerRight: null}},
            lesson: {screen: Lesson, navigationOptions: {header: null}}
        }, {
            navigationOptions: ({navigation}) => ({
                headerTitle: 'Unihat',
                headerTintColor: '#F86624',
                headerRight: <Logout navigation={navigation}/>,
                headerStyle: {backgroundColor: '#3F51B5'},
                headerTitleStyle: {color: '#FFF'}
            })

        });

        return <MenuNavigator onNavigationStateChange={null}/>
    }
}