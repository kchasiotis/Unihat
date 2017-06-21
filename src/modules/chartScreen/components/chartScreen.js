'use strict';

import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
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
        // todo: change formula when flex functionality is supported from package
        let barWidth = this.state.screenSize.width * 0.85;

        // todo: Review implementation of UI logic to pie component
        let fillColor = {'r': 240, 'g': 240, 'b': 240};
        let pie1 = {'r': 51, 'g': 202, 'b': 70};
        let pie2 = {'r': 255, 'g': 189, 'b': 27};

        return (
            <ScrollView style={styles.main} onLayout={this.orientationChange}>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.pieChart}>
                        <Text style={styles.header}>Μέσος όρος</Text>
                        <View style={{height: pieSize}}>
                            <AverageGradePie size={pieSize}
                                             pallete={[pie1, fillColor]}
                                             value={this.state.average} total={10}/>
                        </View>
                    </View>
                    <View style={styles.pieChart}>
                        <Text style={styles.header}>Περασμένα μαθήματα</Text>
                        <View style={{height: pieSize}}>
                            <AverageGradePie size={pieSize}
                                             pallete={[pie2, fillColor]}
                                             value={this.state.lessonsNumber} total={55}/>
                        </View>
                    </View>
                </View>
                <View style={styles.barChart}>
                    <Text style={styles.header}>Πλήθος μαθημάτων ανά βαθμολογία</Text>
                    <BarChart width={barWidth} grades={this.state.grades}/>
                </View>
            </ScrollView>
        );
    }
}

let styles = StyleSheet.create({
    main: {
        backgroundColor: 'white'
    },header: {
        color: 'black',
        fontWeight: 'bold'
    },
    pieChart: {
        flex: 1,
        backgroundColor: 'white',
        elevation: 12,
        margin: 7
    },
    barChart: {
        flex: 1,
        backgroundColor: 'white',
        elevation: 12,
        margin: 7,
        marginTop: 15
    }
});


export default ChartScreen;