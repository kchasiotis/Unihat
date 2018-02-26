import React from 'react';
import {View, StyleSheet} from 'react-native';
import GradePie from './gradePie'
import ChartTitle from "./chartTitle";
import pieChartType from '../pieChartType'

function PieChartWrapper(props) {
    const {pieSize, chartValue} = props;
    const {title, description, total} = pieChartType["average"];

    let fillColor = {'r': 240, 'g': 240, 'b': 240};
    let mainColor = {'r': 51, 'g': 202, 'b': 70};

    return (
        <View style={styles.pieChart}>
            <ChartTitle title={title} description={description}/>

            <View style={{height: pieSize}}>
                <GradePie size={pieSize}
                          chartTitle={title}
                          pallete={[mainColor, fillColor]}
                          value={chartValue} total={total}/>
            </View>
        </View>
    );
}

let styles = StyleSheet.create({
    pieChart: {
        flex: 1,
        backgroundColor: 'white',
        elevation: 12,
        margin: 7
    },
});

export default PieChartWrapper;
