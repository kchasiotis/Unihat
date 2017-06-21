'use strict';

import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import BarChart from './barChart'
import PieChartWrapper from "./pieChartWrapper";
import ChartTitle from "./chartTitle";
import pieChartType from "./pieChartType";
const Dimensions = require('Dimensions');

class ChartScreen extends Component {
    constructor(props) {
        super(props);
        // region Calculate succeeded grades average
        let grades = this.props.allGrades.sGrades.concat(this.props.allGrades.exGrades);

        grades = grades.filter((lesson) => {
            return lesson.grade >= 5 && lesson.state === 'Επιτυχία';
        });

        let length = grades.length;
        let sum = grades.reduce((acc, val) => acc + val.grade, 0);

        let average = (sum / length).toPrecision(3);
        // endregion

        let screenSize = Dimensions.get('window');
        this.state = {grades: grades, average: average, lessonsNumber: length, screenSize: screenSize};

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
                    <PieChartWrapper chartValue={this.state.average} chartType="average"
                                     pieSize={pieSize} mainColor={pie1} fillColor={fillColor}/>

                    <PieChartWrapper chartValue={this.state.lessonsNumber} chartType="succeedLessons"
                                     pieSize={pieSize} mainColor={pie2} fillColor={fillColor}/>
                </View>
                <View style={styles.barChart}>
                    <ChartTitle title={pieChartType['lessonsPerGrade'].title}
                                description={pieChartType['lessonsPerGrade'].description}/>
                    <BarChart width={barWidth} grades={this.state.grades}/>
                </View>
            </ScrollView>
        );
    }
}

let styles = StyleSheet.create({
    main: {
        backgroundColor: 'white'
    }, header: {
        color: 'black',
        fontWeight: 'bold'
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