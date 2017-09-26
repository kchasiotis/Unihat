import React, {Component} from 'react';
import {InitializeLessonList} from '../../lessonList'
import {Logout} from '../containers/logout'
import {ChartScreen} from '../../chartScreen'
import {Lesson} from '../../lesson'
import {DrawerNavigator, StackNavigator, NavigationActions, TabNavigator} from 'react-navigation';
import env from '../../../../environment'

export default class Drawer extends Component {
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

        let aGrades = InitializeLessonList();
        let exGrades = InitializeLessonList();

        let initRoute = env.debug ? env.drawerRoute : null;

        const screenNavigator = TabNavigator({
                aGrades: {
                    screen: aGrades,
                    navigationOptions: {title: 'Όλα'}
                },
                exGrades: {
                    screen: exGrades,
                    navigationOptions: {title: 'Εξεταστική'}
                },
                ChartScreen: {
                    screen: ChartScreen,
                    navigationOptions: {title: 'Γραφήματα'}
                },
            }, {
                initialRouteName: initRoute,
                animationEnabled: false,
                swipeEnabled: false,
                backBehavior: 'none',
                tabBarOptions: {
                    inactiveTintColor: 'white',
                    upperCaseLabel: false,
                    indicatorStyle: {
                        backgroundColor: 'white'
                    },
                    labelStyle: {
                        fontWeight: 'bold',
                    },
                    style: {
                        backgroundColor: '#3F51B5',
                    }
                },
                tabBarPosition: 'bottom'
            }
        );

        const menuNavigator = StackNavigator({
            screenNavigator: {screen: screenNavigator},
            lesson: {screen: Lesson}
        }, {
            navigationOptions: ({navigation}) => ({
                headerTitle: 'Unihat',
                headerRight: <Logout navigation={navigation}/>,
                headerStyle: {backgroundColor: '#3F51B5'},
                headerTitleStyle: {color: 'white'},
            }),
        });

        const DrawerOverlay = DrawerNavigator({
            drawerContent: {screen: menuNavigator}
        });


        return <DrawerOverlay onNavigationStateChange={null}/>;
    }
}