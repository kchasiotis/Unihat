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
        const MyApp = DrawerNavigator({
            aGrades: {screen: InitializeLessonList('aGrades')},
            // sGrades: {screen: InitializeLessonList('sGrades')},
            exGrades: {screen: InitializeLessonList('exGrades')},
            emGrades: {screen: InitializeLessonList('emGrades')},
        }, {
            contentComponent: MenuContent,
            drawerWidth: 200
        });


        return <MyApp screenProps={{allGrades:source}}/>;
    }
}