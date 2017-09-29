import React, {Component} from 'react'
import {Card, CardItem} from 'native-base'
import {Bar} from 'react-native-pathjs-charts'

import {lessonAPI} from "../../../tools/api/lesson";

class Statistics extends Component {
    constructor(props){
        super(props);

        this.state = {lessons: []};
    }

    componentDidMount(){
        let that = this;
        const {lesson} = this.props;

        lessonAPI.getLessons(lesson.code, lesson.examDate, (res) => res.json().then((ls => {
            console.log('Aloha');
            console.log(ls);
            that.setState({lessons: ls})
        })))
    }

    render(){
        const {lessons} = this.state;

        if (lessons.length === 0) return null;

        lessons.sort(function (lesson1, lesson2) {
            return lesson1.grade - lesson2.grade;
        });

        // Count occurrences
        let gradeArray = [], counterArray = [], prev = null;
        for (let i = 0; i < lessons.length; i++) {
            if (lessons[i].grade !== prev) {
                gradeArray.push(lessons[i].grade);
                counterArray.push(1);
            } else {
                counterArray[counterArray.length - 1]++;
            }
            prev = lessons[i].grade;
        }

        // Construct data input for graph
        let data = [];
        for (let i = 0; i < gradeArray.length; i++) {
            // data.push([{v: gradeArray[i], name: ((counterArray[i] / lessons.length).toFixed(2) * 100) + '%'}]);
            data.push([{v:((counterArray[i] / lessons.length).toFixed(2) * 100), name:  gradeArray[i]}]);
            // data.push([{v:counterArray[i], name:  gradeArray[i]}]);
        }

        let options = {
            width: 300,
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
                orient: 'bottom',
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

        return (
            <Card>
                <CardItem>
                    <Bar data={data} options={options} accessorKey='v'/>
                </CardItem>
            </Card>
        )
    }
}

export default Statistics;