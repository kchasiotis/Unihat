import React, {Component} from 'react';
import {LessonList} from '../containers/lessonList';
import {StatusBar, View} from "react-native";
import {Fab, Icon} from "native-base";

class LessonListWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {showFab: true};
    }

    handleFab = (nativeEvent) => {
        const {layoutMeasurement, contentOffset, contentSize} = nativeEvent;

        if (contentOffset.y > 10 && layoutMeasurement.height + contentOffset.y >= contentSize.height - 45) {
            if (this.state.showFab === true) this.setState({showFab: false});
        } else {
            if (this.state.showFab === false) this.setState({showFab: true});
        }
    };

    // todo: (refactoring) move statusbar
    render() {
        const {navigation, theme} = this.props;

        return (
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor="#2137AA"
                    barStyle="light-content"
                />
                <LessonList routeName={navigation.state.routeName} navigation={navigation}
                            handleFab={navigation.state.routeName === 'aGrades' ? this.handleFab : () => {}}/>
                {
                    navigation.state.routeName === 'aGrades' && this.state.showFab
                        ? <Fab
                            active={this.state.showFab}
                            direction="up"
                            style={{backgroundColor: theme.fabBackground}}
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

LessonListWrapper.defaultProps = {
    theme: {fabBackground: 'rgba(105, 114, 104, 0.6)'}
};

export default LessonListWrapper;