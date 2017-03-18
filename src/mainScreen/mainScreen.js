import React, {Component} from 'react';
import InitializeLessonList from '../lessonList/lessonList'
import {TabNavigator} from 'react-navigation';

export default class MainScreen extends Component {
    static navigationOptions = {
        header: {visible: false}
    };

    render() {
        let source = this.props.navigation.state.params.allGrades;
        const MyApp = TabNavigator({
                aGrades: {screen: InitializeLessonList('aGrades')},
                sGrades: {screen: InitializeLessonList('sGrades')},
                exGrades: {screen: InitializeLessonList('exGrades')},
                emGrades: {screen: InitializeLessonList('emGrades')},
            },
            {lazyLoad: false});

        return <MyApp screenProps={{allGrades:source}}/>;
    }
}