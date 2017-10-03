import React from 'react';
import {LessonList} from '../containers/lessonList';
import {StatusBar, View} from "react-native";
import {Fab, Icon} from "native-base";

class LessonListWrapper extends React.Component {
    render() {
        const {navigation} = this.props;

        return (
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor="#2137AA"
                    barStyle="light-content"
                />
                <LessonList routeName={navigation.state.routeName} navigation={navigation}/>
                {
                    navigation.state.routeName === 'aGrades' ?
                        <Fab
                            direction="up"
                            style={{backgroundColor: 'rgba(105, 114, 104, 0.6)'}}
                            position="bottomRight"
                            onPress={() => navigation.navigate('filter')}>
                            <Icon name="ios-funnel"/>
                        </Fab>
                        : null
                }
            </View>
        )
    }
}

export default LessonListWrapper;