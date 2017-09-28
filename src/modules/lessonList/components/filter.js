import React, {Component} from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {CheckBox, View, Content, Text, ListItem, Card, CardItem} from 'native-base';

const CheckBoxBtm = ({value, onClick, title}) => {
    return (
        <View style={{
            flex: 1, alignItems: 'center', flexDirection: 'column', borderRadius: 1,
            borderWidth: 0.5,
            borderColor: '#3F51B5'
        }}>
            <ListItem>
                <CheckBox checked={value}
                          onPress={() => onClick()}/>
            </ListItem>
            <Text>{title}</Text>
        </View>
    );
};

const LessonStates = ({lessonState, LESSON_STATES, filterByState}) => {
    return (
        <View>
            <Card>
                <CardItem header>
                    <Text style={{fontWeight: 'bold'}}>Κατάσταση</Text>
                </CardItem>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <CheckBoxBtm value={lessonState.SUCCEEDED} onClick={() => filterByState(LESSON_STATES.SUCCEEDED)}
                                 title={'Επιτυχία'}/>
                    <CheckBoxBtm value={lessonState.FAILED} onClick={() => filterByState(LESSON_STATES.FAILED)}
                                 title={'Αποτυχία'}/>
                    <CheckBoxBtm value={lessonState.CANCELLED} onClick={() => filterByState(LESSON_STATES.CANCELLED)}
                                 title={'Ακύρωση'}/>
                    <CheckBoxBtm value={lessonState.NO_PARTICIPATION}
                                 onClick={() => filterByState(LESSON_STATES.NO_PARTICIPATION)} title={'Δε δόθηκε'}/>
                </View>
            </Card>
        </View>
    );
};

const GradeSlider = ({gradeRange, multiSliderValuesChange}) => {
    let space = '                                                                   ';

    return (
        <View>
            <Text>Βαθμοί</Text>
            <View style={{marginTop: 30, marginLeft: 20, marginRight: 20}}>
                <View style={{marginBottom: 10}}>
                    <Text>{gradeRange.from}{space}{gradeRange.to}</Text>
                </View>
                <MultiSlider
                    values={[gradeRange.from, gradeRange.to]}
                    onValuesChange={multiSliderValuesChange}
                    min={0}
                    max={10}
                    step={0.5}/>
            </View>
        </View>
    );
};

const Sorting = ({filterSortBy, configBys}) => {
    return (
        <View>
            <Text>Ταξινόμηση</Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <CheckBoxBtm value={filterSortBy === configBys.enrollDate} title={'Ημ. δήλωσης'}/>
                <CheckBoxBtm value={filterSortBy === configBys.grade} title={'Βαθμός'}/>
                <CheckBoxBtm value={filterSortBy === configBys.semester} title={'Εξάμηνο'}/>
            </View>
        </View>
    );
};

const Order = ({filterSortOrder, configOrders}) => {
    return (
        <View>
            <Text>Κατάταξη</Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <CheckBoxBtm value={filterSortOrder === configOrders.desc} title={'Φθίνουσα'}/>
                <CheckBoxBtm value={filterSortOrder === configOrders.asc} title={'Αύξουσα'}/>
            </View>
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

        return (
            <Content>
                <LessonStates lessonState={lessonState} LESSON_STATES={LESSON_STATES} filterByState={filterByState}/>

                <GradeSlider gradeRange={gradeRange} multiSliderValuesChange={this.multiSliderValuesChange}/>

                <Sorting filterSortBy={sort.by} configBys={filterSortConfig.by}/>

                <Order filterSortOrder={sort.order} configOrders={filterSortConfig.order}/>

            </Content>
        );
    }
}