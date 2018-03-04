import React from 'react';

import LessonsTabNav from './lessonTabNav'
import {Lesson} from '../../lesson'
import {Filter} from '../../lessonList'
import {Logout} from '../containers/logout'
import {NavigationActions, StackNavigator} from 'react-navigation';
import {Settings} from "../../settings/";
import HeaderIconsWrapper from "../components/headerIconsWrapper";
import Welcome from "../components/welcome";
import {Text} from "native-base";

export default class LoggedNav extends React.Component {
    constructor(props) {
        super(props);
        this.loginRoute = this.loginRoute.bind(this);
    }

    loginRoute() {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'login'})
            ]
        });
        this.props.navigation.dispatch(resetAction)
    }

    render() {
        const {params} = this.props.navigation.state;
        Logout.defaultProps = {loginRoute: this.loginRoute};

        const MenuNavigator = StackNavigator({
            screenNavigator: {screen: LessonsTabNav()},
            filter: {screen: Filter, navigationOptions: {headerTitle: 'Φίλτρα', headerRight: null}},
            lesson: {screen: Lesson, navigationOptions: {header: null}},
            welcome: {screen: Welcome, navigationOptions: {header: null}},
            settings: {screen: Settings, navigationOptions: {headerTitle: 'Ρυθμίσεις', headerRight: null}}
        }, {
            initialRouteName: params.firstRun ? 'welcome' : 'screenNavigator',
            navigationOptions: ({navigation}) => ({
                headerTitle: <Text style={{textAlign: 'left', marginHorizontal:16, fontSize: 20, fontWeight:'bold', color: 'white'}}>Unihat</Text>,
                headerTintColor: '#FFF',
                headerRight: <HeaderIconsWrapper navigation={navigation}/>,
                headerStyle: {backgroundColor: '#3F51B5'},
                headerTitleStyle: {color: '#FFF'}
            })

        });

        return <MenuNavigator/>
    }
}