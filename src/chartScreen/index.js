'use strict';

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import BarChart from './barChart'

class ChartScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let grades = this.props.allGrades.sGrades.concat(this.props.allGrades.exGrades);

        // region Calculate succeeded grades average
        let sum = 0;
        let counter = 0;
        for (let i = 0; i < grades.length; i++) {
            if (parseFloat(grades[i].grade) >= 5 && grades[i].state === 'Επιτυχία') {
                sum += parseFloat(grades[i].grade);
                counter++;
            }
        }

        let average = sum / counter;
        average = average.toPrecision(3);
        // endregion

        return (
            <View>
                <Text>Μέσος όρος: {average}</Text>
                <Text>Περασμένα μαθήματα: {counter}</Text>
                <BarChart grades={grades}/>
            </View>
        );
    }
}

export default ChartScreen;