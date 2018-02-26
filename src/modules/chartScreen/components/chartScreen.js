'use strict';

import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import BarChart from './barChart'
import PieChartWrapper from "./pieChartWrapper";
import ChartTitle from "./chartTitle";
import chartType from "../chartType";
import SucceededCount from "./succeededCount";
const Dimensions = require('Dimensions');

class ChartScreen extends React.Component {
    constructor(props) {
        super(props);

        let screenSize = Dimensions.get('window');
        this.state = {screenSize: screenSize};

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
        const {lessonsLists} = this.props;
        const {sGrades, exGrades} = lessonsLists;
        if (sGrades.length === 0 && exGrades.length === 0) return null;

        // region Calculate succeeded grades average
        let allLessons = sGrades.concat(exGrades);

        let succeededLessons = allLessons.filter(lesson => lesson.grade >= 5 && lesson.state === 'Επιτυχία');

        let lessonsNumber = succeededLessons.length;
        if (lessonsNumber === 0) return null;

        let sum = succeededLessons.reduce((acc, val) => acc + val.grade, 0);

        let average = (sum / lessonsNumber).toPrecision(3);
        // endregion


        //region Set up UI
        let pieSize = this.state.screenSize.width / 2;
        // todo: (priority 3) change formula when flex functionality is supported from package
        let barWidth = this.state.screenSize.width * 0.85;
        //endregion

        return (
            <ScrollView style={styles.main} onLayout={this.orientationChange}>
                <View style={{flexDirection: 'row'}}>
                    <PieChartWrapper chartValue={average} pieSize={pieSize}/>

                    <SucceededCount lessonsNumber={lessonsNumber} contentHeight={pieSize}/>
                </View>
                <View style={styles.barChart}>
                    <ChartTitle title={chartType['lessonsPerGrade'].title}
                                description={chartType['lessonsPerGrade'].description}/>
                    <BarChart width={barWidth} lessonsLists={allLessons}/>
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