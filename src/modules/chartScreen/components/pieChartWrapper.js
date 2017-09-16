import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import AverageGradePie from './averageGradePie'
import ChartTitle from "./chartTitle";
import pieChartType from './pieChartType'

export default class PieChartWrapper extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {pieSize, mainColor, fillColor, chartValue, chartType} = this.props;

        return (
            <View style={styles.pieChart}>
                <ChartTitle title={pieChartType[chartType].title}
                            description={pieChartType[chartType].description}/>
                <View style={{height: pieSize}}>
                    <AverageGradePie size={pieSize}
                                     chartTitle={pieChartType[chartType].title}
                                     pallete={[mainColor, fillColor]}
                                     value={chartValue} total={pieChartType[chartType].total}/>
                </View>
            </View>
        );
    }
}


let styles = StyleSheet.create({
    pieChart: {
        flex: 1,
        backgroundColor: 'white',
        elevation: 12,
        margin: 7
    },
});


