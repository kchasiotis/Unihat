import React from 'react';
import {View} from 'react-native';
import {Text} from "native-base";

/*
 * Displays the number of succeeded lessons
 */
export default class SucceededCount extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {contentHeight, style} = this.props;

        return (
            <View style={{justifyContent: 'center', alignItems: 'center',...style}}>
                <View style={styles.circle(contentHeight)}>
                    <Text style={{color: 'black', fontSize: contentHeight / 4}}>{this.props.lessonsNumber}</Text>
                </View>
            </View>
        );
    }
}


let styles = {
    pieChart: {
        flex: 1,
        backgroundColor: 'white',
        elevation: 12,
        margin: 7
    },
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


