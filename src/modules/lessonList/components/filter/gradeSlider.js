import React from 'react';

import MultiSlider from "@ptomasroos/react-native-multi-slider";
import {Text, View} from "native-base";
import {gradeSlider} from "../../../../../theme/components/gradeSlider";
import FilterCard from "./filterCard";

// todo: (ui) dynamic slider width
const GradeSlider = ({gradeRange, multiSliderValuesChange, theme}) => {
    return (
        <FilterCard title={'Βαθμοί'}>
            <View style={{marginLeft: 25, marginRight: 20}}>
                <View style={{marginBottom: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{color: theme.labelColor}}>{gradeRange.from}</Text>
                    <Text style={{color: theme.labelColor}}>{gradeRange.to}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                    <MultiSlider
                        selectedStyle={{backgroundColor: theme.sliderColor,}}
                        markerStyle={{backgroundColor: theme.markerColor}}
                        values={[gradeRange.from, gradeRange.to]}
                        onValuesChange={multiSliderValuesChange}
                        allowOverlap
                        min={0}
                        max={10}
                        step={0.5}/>
                </View>
            </View>
        </FilterCard>
    );
};

GradeSlider.defaultProps = {
    theme: {
        sliderColor: gradeSlider.sliderColor,
        markerColor: gradeSlider.markerColor,
        labelColor: gradeSlider.labelColor
    }
};

// todo: (ui) move card to different component
const style = {
    cardTitle: {fontWeight: 'bold', color: '#333'},
    checkboxRow: {flex: 1, flexDirection: 'row'}
};

export default GradeSlider;