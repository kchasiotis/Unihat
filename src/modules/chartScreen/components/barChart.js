'use strict';

import React, {Component} from 'react';
import {Bar} from 'react-native-pathjs-charts'

export default class BarChart extends Component {
    render() {
        let grades = this.props.grades;

        grades = grades.filter((lesson) => {
            return lesson.grade >= 5
        });

        grades.sort(function (lesson1, lesson2) {
            return lesson1.grade - lesson2.grade;
        });

        // Count occurrences
        let gradeArray = [], counterArray = [], prev = null;
        for (let i = 0; i < grades.length; i++) {
            if (grades[i].grade !== prev) {
                gradeArray.push(grades[i].grade);
                counterArray.push(1);
            } else {
                counterArray[counterArray.length - 1]++;
            }
            prev = grades[i].grade;
        }

        // Construct data input for graph
        let data = [];
        for (let i = 0; i < gradeArray.length; i++) {
            data.push([{v: counterArray[i], name: gradeArray[i]}]);
        }

        // Graph options
        let options = {
            width: this.props.width,
            height: 300,
            margin: {
                top: 20,
                left: 25,
                bottom: 50,
                right: 20
            },
            color: '#2980B9',
            gutter: 20,
            animate: {
                type: 'oneByOne',
                duration: 200,
                fillTransition: 3
            },
            axisX: {
                showAxis: true,
                showLines: true,
                showLabels: true,
                showTicks: true,
                zeroAxis: false,
                label: {
                    fontFamily: 'Arial',
                    fontSize: 10,
                    fontWeight: true,
                    fill: '#34495E'
                }
            },
            axisY: {
                showAxis: true,
                showLines: true,
                showLabels: true,
                showTicks: true,
                zeroAxis: false,
                orient: 'left',
                label: {
                    fontFamily: 'Arial',
                    fontSize: 10,
                    fontWeight: true,
                    fill: '#34495E'
                }
            }
        };

        return <Bar data={data} options={options} accessorKey='v'/>;
    }
}
