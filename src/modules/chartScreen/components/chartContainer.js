import React from 'react';
import {View} from 'react-native';
import ChartTitle from "./chartTitle";
import chartType from '../chartType';

export default class ChartContainer extends React.Component {
    render() {
        const {chType} = this.props;
        const {title, description} = chartType[chType];

        return (
            <View style={styles.chart}>
                <ChartTitle title={title} description={description}/>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}


let styles = {
    chart: {
        flex: 1,
        backgroundColor: 'white',
        elevation: 12,
        margin: 7
    }
};


