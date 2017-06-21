import React, {Component} from 'react';
import {InitializeLessonList} from '../../lessonList/index'
import MenuContent from '../components/MenuContent'
import {ChartScreen} from '../../chartScreen/index'
import {DrawerNavigator, StackNavigator, NavigationActions, TabNavigator} from 'react-navigation';
import {Icon} from "native-base";
import env from '../../../../environment'
import {Text} from "react-native";

function MenuIcon(props) {
    return (
        <Icon name="menu" style={{paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5, color: 'white'}}
              onPress={() => props.navigation.navigate('DrawerOpen')}/>
    );
}

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
        MenuContent.defaultProps = {loginRoute: this.loginRoute};

        let aGrades = InitializeLessonList();
        let exGrades = InitializeLessonList();

        let initRoute = env.debug ? env.drawerRoute.values[env.drawerRoute.show] : null;

        const screenNavigator = TabNavigator({
                aGrades: {screen: aGrades},
                exGrades: {screen: exGrades},
                chartScreen: {screen: ChartScreen},
            }, {
                initialRouteName: initRoute,
                animationEnabled: false,
                swipeEnabled: false,
                tabBarComponent: () => <Text style={{display: 'none'}}/>
            }
        );

        const menuNavigator = StackNavigator({
            screenNavigator: {screen: screenNavigator}
        }, {
            navigationOptions: ({navigation}) => ({
                headerTitle: 'Βαθμοί',
                headerLeft: <MenuIcon navigation={navigation}/>,
                headerStyle: {backgroundColor: '#3F51B5'},
                headerTitleStyle: {color: 'white'},
            }),
        });

        const DrawerOverlay = DrawerNavigator({
            drawerContent: {screen: menuNavigator}
        }, {
            contentComponent: MenuContent,
            drawerWidth: 200
        });


        return <DrawerOverlay onNavigationStateChange={null}/>;
    }
}