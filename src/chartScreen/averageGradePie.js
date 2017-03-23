import React, {Component} from 'react';
import {Pie} from 'react-native-pathjs-charts'

export default class AverageGradePie extends Component {
    render() {
        if (this.props.layout.height === 0 || this.props.layout.width === 0) return null;

        let data = [{
            "name": this.props.value,
            "value": this.props.value * 100
        }, {
            "name": '',
            "value": (this.props.total - this.props.value) * 100
        }];

        let options = {
            margin: {
                top: 20,
                left: 20,
                right: 20,
                bottom: 20
            },
            width: this.props.layout.width,
            height: this.props.layout.width,
            color: '#2980B9',
            r: this.props.layout.width / 8,
            R: this.props.layout.width / 2.5,
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
            pallete: this.props.pallete || [{'r': 14, 'g': 168, 'b': 6}, {'r': 206, 'g': 206, 'b': 206}]
        };

        return (
            <Pie
                data={data}
                options={options}
                accessorKey="value"/>
        )
    }
}
