import React, {Component} from 'react';

import MultiSlider from "@ptomasroos/react-native-multi-slider";
import {Card, CardItem, Text, View} from "native-base";
import {colorPalette} from "./colorPalette";

// todo: (ui) dynamic slider width
const GradeSlider = ({gradeRange, multiSliderValuesChange}) => {
    return (
        <Card>
            <CardItem header>
                <Text style={style.cardTitle}>Βαθμοί</Text>
            </CardItem>
            <View style={{marginLeft: 25, marginRight: 20}}>
                <View style={{marginBottom: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{color: colorPalette.willowGrove}}>{gradeRange.from}</Text>
                    <Text style={{color: colorPalette.willowGrove}}>{gradeRange.to}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                    <MultiSlider
                        selectedStyle={{backgroundColor: colorPalette.orange,}}
                        markerStyle={{backgroundColor: colorPalette.orange}}
                        values={[gradeRange.from, gradeRange.to]}
                        onValuesChange={multiSliderValuesChange}
                        allowOverlap
                        min={0}
                        max={10}
                        step={0.5}/>
                </View>
            </View>
        </Card>
    );
};

const style = {
    cardTitle: {fontWeight: 'bold', color: colorPalette.mineShaft},
    checkboxRow: {flex: 1, flexDirection: 'row'}
};

export default GradeSlider;