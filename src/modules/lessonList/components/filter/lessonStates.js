import React from 'react';
import {View} from "native-base";
import CheckBoxBtm from "./checkBoxBtm";
import FilterCard from "./filterCard";

const LessonStates = ({lessonState, filterByState}) => {
    return (
        <FilterCard title={'Κατάσταση'}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <CheckBoxBtm value={lessonState.SUCCEEDED} onClick={() => filterByState('SUCCEEDED')}
                             title={'Επιτυχία'}/>
                <CheckBoxBtm value={lessonState.FAILED} onClick={() => filterByState('FAILED')}
                             title={'Αποτυχία'}/>
                <CheckBoxBtm value={lessonState.CANCELLED} onClick={() => filterByState('CANCELLED')}
                             title={'Ακύρωση'}/>
                <CheckBoxBtm value={lessonState.NO_PARTICIPATION}
                             onClick={() => filterByState('NO_PARTICIPATION')} title={'Δε δόθηκε'}/>
            </View>
        </FilterCard>
    );
};

export default LessonStates;