import React from 'react';
import {View, Text} from 'react-native';
import ChartTitle from "./chartTitle";
import chartType from './pieChartType'

export default class SucceededCount extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {contentHeight} = this.props;
        const {title, description} = chartType['succeedLessons'];

        return (
            <View style={styles.pieChart}>
                <ChartTitle title={title}
                            description={description}/>

                <View style={{height: contentHeight, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={styles.circle(contentHeight)}>
                        <Text style={{color: 'black', fontSize: contentHeight / 3.5}}>{this.props.lessonsNumber}</Text>
                    </View>
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
        contentHeight/=1.3;
        return {
            width: contentHeight,
            height: contentHeight,
            borderRadius: contentHeight/2,
            backgroundColor: '#ffbd1b', justifyContent: 'center', alignItems: 'center'
        }
    }
};


