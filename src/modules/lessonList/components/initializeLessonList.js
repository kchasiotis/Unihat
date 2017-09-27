import React from 'react';
import {LessonList} from '../containers/lessonList';
import {StatusBar, View} from "react-native";

function InitializeLessonList() {
    return function LessonListEm(props) {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor="#2137AA"
                    barStyle="light-content"
                />
                <LessonList routeName={props.navigation.state.routeName} navigation={props.navigation}/>
            </View>
        )
    }
}

export default InitializeLessonList;