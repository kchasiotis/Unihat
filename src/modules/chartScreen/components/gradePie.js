import React from 'react';
import {Pie} from 'react-native-pathjs-charts'
import pieChartType from './pieChartType';

export default class GradePie extends React.Component {
    render() {
        if (this.props.size === 0) return null;

        const {chartTitle, total, value, size, pallete} = this.props;

        let data = [{
            "name": this.props.value,
            "value": this.props.value * 100
        }];

        if (total !== value) {
            data.push({
                "name": chartTitle === pieChartType.succeedLessons.title ? total - value : '',
                "value": (total - value) * 100
            })
        }

        // todo: (priority 3) check size formulas with width
        let options = {
            margin: {
                top: 20,
                left: 20,
                right: 20,
                bottom: 20
            },
            width: size,
            height: size,
            r: size / 8,
            R: size / 2.5,
            legendPosition: 'topLeft',
            animate: {
                type: 'oneByOne',
                duration: 200,
                fillTransition: 3
            },
            label: {
                fontFamily: 'Arial',
                fontSize: 15,
                fontWeight: true,
                color: 'black'
                // color: '#ECF0F1'
            },
            pallete: pallete || [{'r': 14, 'g': 168, 'b': 6}, {'r': 181, 'g': 181, 'b': 181}]
        };

        return (
            <Pie
                data={data}
                options={options}
                accessorKey="value"/>
        )
    }
}
