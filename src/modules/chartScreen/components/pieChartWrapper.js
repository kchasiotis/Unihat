import React from 'react';
import {View, StyleSheet} from 'react-native';
import GradePie from './gradePie'
import ChartTitle from "./chartTitle";
import pieChartType from '../pieChartType'

export default class PieChartWrapper extends React.Component {
    constructor(props) {
        super(props);
        const {chartType, user} = this.props;

        if (chartType === 'average')
            this.state = {total: pieChartType[chartType].total};
        else {
            let total = null;
            let chType = pieChartType[chartType];

            switch (user.department) {
                case '311':
                    total = chType.total['math'];
                    break;
                case '321':
                    total = chType.total['icsd'];
                    break;
                case '331':
                    total = chType.total['sas'];
                    break;
            }

            this.state = {total: total};
        }
    }

    render() {
        const {pieSize, mainColor, fillColor, chartValue, chartType} = this.props;
        const {title, description} = pieChartType[chartType];

        return (
            <View style={styles.pieChart}>
                <ChartTitle title={title}
                            description={description}/>


                <View style={{height: pieSize}}>
                    <GradePie size={pieSize}
                              chartTitle={title}
                              pallete={[mainColor, fillColor]}
                              value={chartValue} total={this.state.total}/>
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


