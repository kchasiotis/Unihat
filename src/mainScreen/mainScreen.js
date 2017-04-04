import React, {Component} from 'react';
import InitializeLessonList from '../lessonList/lessonList'
import MenuContent from '../menu/MenuContent'
import ChartScreen from '../chartScreen/index'
import {DrawerNavigator, NavigationActions} from 'react-navigation';

export default class MainScreen extends Component {
    static navigationOptions = {
        title: 'Βαθμοί'
    };

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

        const MyApp = DrawerNavigator({
            aGrades: {screen: aGrades},
            exGrades: {screen: exGrades},
            chartScreen: {screen: ChartScreen},
        }, {
            contentComponent: MenuContent,
            drawerWidth: 200
        });


        return <MyApp/>;
    }
}