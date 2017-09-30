import React, {Component} from 'react';
import {Card, CardItem, Text, View} from "native-base";
import CheckBoxBtm from "./checkBoxBtm";
import {colorPalette} from "./colorPalette";

const LessonStates = ({lessonState, filterByState}) => {
    return (
        <Card>
            <CardItem>
                <Text style={style.cardTitle}>Κατάσταση</Text>
            </CardItem>
            <View style={style.checkboxRow}>
                <CheckBoxBtm value={lessonState.SUCCEEDED} onClick={() => filterByState('SUCCEEDED')}
                             title={'Επιτυχία'}/>
                <CheckBoxBtm value={lessonState.FAILED} onClick={() => filterByState('FAILED')}
                             title={'Αποτυχία'}/>
                <CheckBoxBtm value={lessonState.CANCELLED} onClick={() => filterByState('CANCELLED')}
                             title={'Ακύρωση'}/>
                <CheckBoxBtm value={lessonState.NO_PARTICIPATION}
                             onClick={() => filterByState('NO_PARTICIPATION')} title={'Δε δόθηκε'}/>
            </View>
        </Card>
    );
};

const style = {
    cardTitle: {fontWeight: 'bold', color: colorPalette.mineShaft},
    checkboxRow: {flex: 1, flexDirection: 'row'}
};

export default LessonStates;