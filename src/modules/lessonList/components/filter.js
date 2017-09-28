import React, {Component} from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {CheckBox, View, Content, Text, ListItem, Card, CardItem} from 'native-base';

const CheckBoxBtm = ({value, onClick, title}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', flexDirection: 'column'}}>
            <ListItem>
                <CheckBox color={colorPalette.orange} checked={value}
                          onPress={() => onClick()}/>
            </ListItem>
            <Text style={style.checkboxText}>{title}</Text>
        </View>
    );
};

const LessonStates = ({lessonState, LESSON_STATES, filterByState}) => {
    return (
        <Card>
            <CardItem>
                <Text style={style.cardTitle}>Κατάσταση</Text>
            </CardItem>
            <View style={style.checkboxRow}>
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
    );
};

const GradeSlider = ({gradeRange, multiSliderValuesChange}) => {
    let space = '                                                              ';

    return (
        <Card>
            <CardItem header>
                <Text style={style.cardTitle}>Βαθμοί</Text>
            </CardItem>
            <View style={{marginLeft: 25, marginRight: 20}}>
                <View style={{marginBottom: 10}}>
                    <Text>{gradeRange.from}{gradeRange.from - parseInt(gradeRange.from) === 0 ? '   ' : ''}{space}{gradeRange.to}</Text>
                </View>
                <MultiSlider
                    selectedStyle={{backgroundColor: colorPalette.orange,}}
                    markerStyle={{backgroundColor: colorPalette.orange}}
                    values={[gradeRange.from, gradeRange.to]}
                    onValuesChange={multiSliderValuesChange}
                    min={0}
                    max={10}
                    step={0.5}/>
            </View>
        </Card>
    );
};

const Sorting = ({filterSortBy, configBys}) => {
    return (
        <Card>
            <CardItem header>
                <Text style={style.cardTitle}>Ταξινόμηση</Text>
            </CardItem>
            <View style={style.checkboxRow}>
                <CheckBoxBtm value={filterSortBy === configBys.enrollDate} title={'Ημ. δήλωσης'}/>
                <CheckBoxBtm value={filterSortBy === configBys.grade} title={'Βαθμός'}/>
                <CheckBoxBtm value={filterSortBy === configBys.semester} title={'Εξάμηνο'}/>
            </View>
        </Card>
    );
};

const Order = ({filterSortOrder, configOrders}) => {
    return (
        <Card>
            <CardItem header>
                <Text style={style.cardTitle}>Κατάταξη</Text>
            </CardItem>
            <View style={style.checkboxRow}>
                <CheckBoxBtm value={filterSortOrder === configOrders.desc} title={'Φθίνουσα'}/>
                <CheckBoxBtm value={filterSortOrder === configOrders.asc} title={'Αύξουσα'}/>
            </View>
        </Card>
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

let colorPalette = {
    sanMarino: '#3F51B5',
    orange: '#F86624',
    willowGrove: '#697268',
    mineShaft: '#333333'
};
const style = {
    checkboxRow: {flex: 1, flexDirection: 'row'},
    checkboxText: {color: colorPalette.willowGrove},
    cardTitle: {fontWeight: 'bold', color: colorPalette.mineShaft},
};