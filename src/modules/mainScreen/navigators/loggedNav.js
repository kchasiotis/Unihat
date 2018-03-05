import React from 'react';

import LessonsTabNav from './lessonTabNav'
import {Lesson} from '../../lesson'
import {Filter} from '../../lessonList'
import {Logout} from '../containers/logout'
import {StackNavigator} from 'react-navigation';
import {Settings} from "../../settings/";
import HeaderIconsWrapper from "../components/headerIconsWrapper";
import Welcome from "../components/welcome";
import {Text} from "native-base";

export default class LoggedNav extends React.Component {
    render() {
        const {navigation} = this.props;
        const {firstRun} = navigation.state.params;
        Logout.defaultProps = {loginRoute: () => navigation.navigate('login')};

        const MenuNavigator = StackNavigator({
            screenNavigator: {screen: LessonsTabNav()},
            filter: {
                screen: Filter,
                navigationOptions: {headerTitle: <Text style={styles.headerTitle}>Φίλτρα</Text>, headerRight: null}
            },
            lesson: {screen: Lesson, navigationOptions: {header: null}},
            welcome: {screen: Welcome, navigationOptions: {header: null}},
            settings: {
                screen: Settings,
                navigationOptions: {headerTitle: <Text style={styles.headerTitle}>Ρυθμίσεις</Text>, headerRight: null}
            }
        }, {
            initialRouteName: firstRun ? 'welcome' : 'screenNavigator',
            navigationOptions: ({navigation}) => ({
                headerTitle: <Text style={styles.headerTitle}>Unihat</Text>,
                headerTintColor: '#FFF',
                headerRight: <HeaderIconsWrapper navigation={navigation}/>,
                headerStyle: {backgroundColor: '#3F51B5'},
                headerTitleStyle: {color: '#FFF'}
            })
        });

        return <MenuNavigator/>
    }
};

const styles = {
    headerTitle: {textAlign: 'left', marginHorizontal: 16, fontSize: 20, fontWeight: 'bold', color: 'white'}
};