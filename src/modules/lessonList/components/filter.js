import React, {Component} from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {CheckBox, View, Content, Text, ListItem, Body} from 'native-base';

const CheckBoxL = ({value, onClick, title}) => {
    return (
        <ListItem>
            <CheckBox checked={value}
                      onPress={() => onClick()}/>
            <Body>
            <Text>{title}</Text>
            </Body>
        </ListItem>
    );
};

const LessonStates = ({lessonState, LESSON_STATES, filterByState}) => {
    return (
        <View>
            <Text>Κατάσταση</Text>
            <CheckBoxL value={lessonState.SUCCEEDED} onClick={() => filterByState(LESSON_STATES.SUCCEEDED)} title={'Επιτυχία'}/>
            <CheckBoxL value={lessonState.FAILED} onClick={() => filterByState(LESSON_STATES.FAILED)} title={'Αποτυχία'}/>
            <CheckBoxL value={lessonState.CANCELLED} onClick={() => filterByState(LESSON_STATES.CANCELLED)} title={'Ακύρωση'}/>
            <CheckBoxL value={lessonState.NO_PARTICIPATION} onClick={() => filterByState(LESSON_STATES.NO_PARTICIPATION)} title={'Δε δόθηκε'}/>
        </View>
    );
};


export default class Filter extends Component {
    constructor(props) {
        super(props);
    }

    multiSliderValuesChange = (values) => {
        this.props.filterGradeRange({from: values[0], to: values[1]});
    };

    render() {
        const {lessonState, gradeRange, sort} = this.props.filter;
        const {filterSortConfig, filterByState, LESSON_STATES} = this.props;

        let space = '                                                                   ';

        return (
            <Content>
                <LessonStates lessonState={lessonState} LESSON_STATES={LESSON_STATES} filterByState={filterByState}/>

                <Text>Βαθμοί</Text>
                <View style={{marginTop: 30, marginLeft: 20, marginRight: 20}}>
                    <View style={{marginBottom: 10}}>
                        <Text>{gradeRange.from}{space}{gradeRange.to}</Text>
                    </View>
                    <MultiSlider
                        values={[gradeRange.from, gradeRange.to]}
                        onValuesChange={this.multiSliderValuesChange}
                        min={0}
                        max={10}
                        step={0.5}/>
                </View>

                <Text>Ταξινόμηση</Text>
                <ListItem>
                    <CheckBox checked={sort.by === filterSortConfig.by.enrollDate}/>
                    <Body>
                    <Text>Ημερομηνία δήλωσης</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox checked={sort.by === filterSortConfig.by.grade}/>
                    <Body>
                    <Text>Βαθμός</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox checked={sort.by === filterSortConfig.by.semester}/>
                    <Body>
                    <Text>Εξάμηνο</Text>
                    </Body>
                </ListItem>
                <Text>Κατάταξη</Text>
                <ListItem>
                    <CheckBox checked={sort.order === filterSortConfig.order.desc}/>
                    <Body>
                    <Text>Φθίνουσα</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox checked={sort.order === filterSortConfig.order.asc}/>
                    <Body>
                    <Text>Αύξουσα</Text>
                    </Body>
                </ListItem>
            </Content>
        );
    }
}