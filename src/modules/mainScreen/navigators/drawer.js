import React, {Component} from 'react';
import {InitializeLessonList} from '../../lessonList/index'
import MenuContent from '../components/MenuContent'
import {ChartScreen} from '../../chartScreen/index'
import {DrawerNavigator, StackNavigator, NavigationActions} from 'react-navigation';
import {Icon} from "native-base";

function MenuIcon(props) {
    return (
        <Icon name="menu" style={{paddingLeft: 15, color: 'white'}}
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

        const HomeNavigator = StackNavigator({
            aGrades: {screen: aGrades},
            exGrades: {screen: exGrades},
            chartScreen: {screen: ChartScreen},
        }, {
            navigationOptions: ({navigation}) => ({
                headerTitle: 'Βαθμοί',
                // headerLeft: null,
                headerLeft: <MenuIcon navigation={navigation}/>,
                headerStyle: {backgroundColor: '#3F51B5'},
                headerTitleStyle: {color: 'white'},
            }),
        });

        const DrawerOverlay = DrawerNavigator({
            myApp: {screen: HomeNavigator}
        }, {
            contentComponent: MenuContent,
            drawerWidth: 200
        });


        return <DrawerOverlay onNavigationStateChange={null}/>;
    }
}