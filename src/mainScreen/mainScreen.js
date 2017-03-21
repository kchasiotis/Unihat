import React, {Component} from 'react';
import InitializeLessonList from '../lessonList/lessonList'
import MenuContent from '../menu/MenuContent'
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
        MenuContent.defaultProps = {loginRoute: this.loginRoute};

        let source = this.props.navigation.state.params.allGrades;
        let aGrades = InitializeLessonList(source.aGrades);
        let exGrades = InitializeLessonList(source.exGrades);

        const MyApp = DrawerNavigator({
            exGrades: {screen: exGrades},
            aGrades: {screen: aGrades},
        }, {
            contentComponent: MenuContent,
            drawerWidth: 200
        });


        return <MyApp/>;
    }
}