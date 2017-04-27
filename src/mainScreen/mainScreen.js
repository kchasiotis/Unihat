import React, {Component} from 'react';
import InitializeLessonList from '../lessonList/lessonList'
import MenuContent from '../menu/MenuContent'
import ChartScreen from '../chartScreen/index'
import {DrawerNavigator, StackNavigator, NavigationActions} from 'react-navigation';
import {Icon} from "native-base";

function MenuIcon(props) {
    return (
        <Icon name="menu" style={{paddingLeft:15, color:'white'}} onPress={() => props.navigation.navigate('DrawerOpen')}/>
    );
}

export default class MainScreen extends Component {
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
        let source = this.props.navigation.state.params.allGrades;

        MenuContent.defaultProps = {loginRoute: this.loginRoute};
        ChartScreen.defaultProps = {allGrades: source};

        let aGrades = InitializeLessonList(source.aGrades);
        let exGrades = InitializeLessonList(source.exGrades);

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


        return <DrawerOverlay/>;
    }
}