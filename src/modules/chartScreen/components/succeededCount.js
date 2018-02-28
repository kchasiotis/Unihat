import React from 'react';
import {View} from 'react-native';
import {Text} from "native-base";

/*
 * Displays the number of succeeded lessons
 */
export default class SucceededCount extends React.Component {
    render() {
        const {contentHeight, lessonsNumber} = this.props;

        return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.circle(contentHeight)}>
                    <Text style={{color: 'black', fontSize: contentHeight / 4}}>{lessonsNumber}</Text>
                </View>
            </View>
        );
    }
}


let styles = {
    circle: (contentHeight) => {
        contentHeight /= 1.3;
        return {
            width: contentHeight,
            height: contentHeight,
            borderRadius: contentHeight / 2,
            backgroundColor: '#ffbd1b', justifyContent: 'center', alignItems: 'center'
        }
    }
};


