import React from 'react';
import {LessonList} from '../containers/lessonList';
import {StatusBar, View} from "react-native";

function InitializeLessonList() {
    return function LessonListEm(props) {
        return (
            <View>
                <StatusBar
                    backgroundColor="#2137AA"
                    barStyle="light-content"
                />
                <LessonList routeName={props.navigation.state.routeName}/>
            </View>
        )
    }
}

export default InitializeLessonList;