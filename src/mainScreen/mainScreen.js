import React, {Component} from 'react';
import MenuContent from '../menu/MenuContent'
import {DrawerNavigator, NavigationActions} from 'react-navigation';
import GradesNavigator from "./gradesNavigator";

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
        MenuContent.defaultProps = {loginRoute: this.loginRoute};
        GradesNavigator.defaultProps = {allGrades: this.props.navigation.state.params.allGrades};

        const DrawerOverlay = DrawerNavigator({
            myApp: {screen: GradesNavigator}
        }, {
            contentComponent: MenuContent,
            drawerWidth: 200
        });

        return <DrawerOverlay onNavigationStateChange={null}/>;
    }
}