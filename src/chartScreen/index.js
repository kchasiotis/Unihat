'use strict';

import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import BarChart from './barChart'
import AverageGradePie from './averageGradePie'
const Dimensions = require('Dimensions');

class ChartScreen extends Component {
    constructor(props) {
        super(props);
        // region Calculate succeeded grades average
        let grades = this.props.allGrades.sGrades.concat(this.props.allGrades.exGrades);

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

        let screenSize = Dimensions.get('window');
        this.state = {grades: grades, average: average, lessonsNumber: counter, screenSize: screenSize};

        this.orientationChange = this.orientationChange.bind(this);
        this.orientation = (screenSize.width > screenSize.height) ? 'LANDSCAPE' : 'PORTRAIT';
    }

    orientationChange() {
        let screenSize = Dimensions.get('window');

        let orientation = (screenSize.width > screenSize.height) ? 'LANDSCAPE' : 'PORTRAIT';
        if (this.orientation === orientation) return;

        this.orientation = orientation;
        this.setState({screenSize: screenSize});
    }

    render() {
        let pieSize = this.state.screenSize.width / 2;
        let barWidth = this.state.screenSize.width * 0.85;

        // todo: Review implementation of UI logic to pie component
        return (
            <ScrollView onLayout={this.orientationChange}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <Text style={{fontWeight: 'bold'}}>Μέσος όρος</Text>
                        <View style={{height: pieSize}}>
                            <AverageGradePie size={pieSize}
                                             value={this.state.average} total={10}/>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{fontWeight: 'bold'}}>Περασμένα μαθήματα</Text>
                        <View style={{height: pieSize}}>
                            <AverageGradePie size={pieSize}
                                             pallete={[{'r':255,'g':98,'b':7}, {'r':181,'g':181,'b':181}]}
                                             value={this.state.lessonsNumber} total={55}/>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{fontWeight: 'bold'}}>Πλήθος μαθημάτων ανά βαθμολογία</Text>
                    <BarChart width={barWidth} grades={this.state.grades}/>
                </View>
            </ScrollView>
        );
    }
}

export default ChartScreen;