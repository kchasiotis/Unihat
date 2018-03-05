import React from 'react';
import {LessonList} from '../containers/lessonList';
import {StatusBar, View} from "react-native";
import {Fab, Icon} from "native-base";

class FabFilter extends React.Component {
    state = {pressable: true};
    pressable = true;

    componentDidMount() {
        this.pressable = true;

        this.didBlurSubscription = this.props.navigation.addListener(
            'willFocus',
            () => {
                this.pressable = true;
            }
        );
    }

    componentWillUnmount(){
        // Remove the listener when you are done
        this.didBlurSubscription.remove();
    }

    render() {
        return (
            <Fab
                direction="up"
                style={{backgroundColor: 'rgba(105, 114, 104, 1)'}}
                position="bottomRight"
                onPress={() => {
                    if (this.pressable === false) return;
                    this.pressable = false;
                    this.props.navigation.navigate('filter');
                }}>
                <Icon name="ios-funnel"/>
            </Fab>
        );
    }
}

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
                        <FabFilter navigation={navigation}/>
                        : null
                }
            </View>
        )
    }
}

export default LessonListWrapper;