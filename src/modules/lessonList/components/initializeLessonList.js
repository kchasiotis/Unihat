import React from 'react';
import {LessonList} from '../containers/lessonList';
import {StatusBar, View} from "react-native";
import {Fab, Icon} from "native-base";

function InitializeLessonList() {
    return function LessonListEm(props) {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor="#2137AA"
                    barStyle="light-content"
                />
                <LessonList routeName={props.navigation.state.routeName} navigation={props.navigation}/>
                {
                    props.navigation.state.routeName === 'aGrades'
                        ? <Fab
                            direction="up"
                            style={{backgroundColor: '#3F51B5'}}
                            position="bottomRight"
                            onPress={() => props.navigation.navigate('filter')}>
                            <Icon name="ios-funnel"/>
                        </Fab>
                        : null

                }
            </View>
        )
    }
}

export default InitializeLessonList;