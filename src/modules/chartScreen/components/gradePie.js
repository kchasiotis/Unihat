import React from 'react';
import {View} from 'react-native';
import {Pie} from 'react-native-pathjs-charts'
import chartType from '../chartType';

export default class GradePie extends React.Component {
    render() {
        if (this.props.pieSize === 0) return null;

        const {chartTitle, total, value, pieSize, pallete} = this.props;

        let data = [{
            "name": this.props.value,
            "value": this.props.value * 100
        }];

        if (total !== value) {
            data.push({
                "name": chartTitle === chartType.succeedLessons.title ? total - value : '',
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
            width: pieSize,
            height: pieSize,
            r: pieSize / 8,
            R: pieSize / 2.5,
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
            <View style={{height: pieSize,...this.props.style}}>
                <Pie
                    data={data}
                    options={options}
                    accessorKey="value"/>
            </View>
        )
    }
}
