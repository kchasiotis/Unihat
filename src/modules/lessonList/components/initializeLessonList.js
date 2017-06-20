import React from 'react';
import {LessonList} from '../containers/lessonList';

function InitializeLessonList() {
    return function LessonListEm(props) {
        return (
            <LessonList routeName={props.navigation.state.routeName}/>
        )
    }
}

export default InitializeLessonList;