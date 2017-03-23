'use strict';

import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import BarChart from './barChart'
import AverageGradePie from './averageGradePie'

class ChartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {averageViewLayout: {height: 0, width: 0}};

        this.viewSize = this.viewSize.bind(this);
    }

    viewSize(event) {
        this.setState({averageViewLayout: event.nativeEvent.layout})
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

        let rectSize = this.state.averageViewLayout.width;
        return (
            <ScrollView>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <Text style={{fontWeight: 'bold'}}>Μέσος όρος</Text>
                        <View style={{height: rectSize}} onLayout={this.viewSize}>
                            <AverageGradePie layout={this.state.averageViewLayout}
                                             value={average} total={10}/>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{fontWeight: 'bold'}}>Περασμένα μαθήματα</Text>
                        <View style={{height: rectSize}} onLayout={this.viewSize}>
                            <AverageGradePie layout={this.state.averageViewLayout}
                                             pallete={[{'r':255,'g':98,'b':7}, {'r':181,'g':181,'b':181}]}
                                             value={counter} total={55}/>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{fontWeight: 'bold'}}>Πλήθος μαθημάτων ανά βαθμολογία</Text>
                    <BarChart grades={grades}/>
                </View>
            </ScrollView>
        );
    }
}

export default ChartScreen;