import React, {Component} from "react";
import {VictoryChart, VictoryBar, VictoryTheme, VictoryAxis, VictoryLabel} from "victory-native";
import {View} from "react-native";

export default class LessonsBarChart extends Component {
    render() {
        let lessonsLists = this.props.lessonsLists;
        let width = this.props.width;

        lessonsLists = lessonsLists.filter(lesson => lesson.grade >= 5);
        lessonsLists.sort((lesson1, lesson2) => lesson1.grade - lesson2.grade);

        // Count occurrences
        let gradeArray = [], counterArray = [], prev = null;
        for (let i = 0; i < lessonsLists.length; i++) {
            if (lessonsLists[i].grade !== prev) {
                gradeArray.push(lessonsLists[i].grade);
                counterArray.push(1);
            } else {
                counterArray[counterArray.length - 1]++;
            }
            prev = lessonsLists[i].grade;
        }

        // Construct data input for graph
        let data = [];
        for (let i = 0; i < gradeArray.length; i++) {
            data.push({x: gradeArray[i], y: counterArray[i]});
        }

        return (
            <View pointerEvents="none">
                <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={0}
                >
                    <VictoryAxis style={{tickLabels: {fontSize: width / 29}}}
                                 tickValues={[5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10]}/>
                    <VictoryBar
                        style={{data: {fill: "#4947c4"}, labels: {fontSize: width / 25, fill: "white"}}}
                        labelComponent={<VictoryLabel dy={30}/>}
                        labels={(d) => d.y}
                        data={data}
                        barRatio={1}
                    />
                </VictoryChart>
            </View>
        );
    }
}
