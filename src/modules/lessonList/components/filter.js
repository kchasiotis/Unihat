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
            <CheckBoxL value={lessonState.SUCCEEDED} onClick={() => filterByState(LESSON_STATES.SUCCEEDED)}
                       title={'Επιτυχία'}/>
            <CheckBoxL value={lessonState.FAILED} onClick={() => filterByState(LESSON_STATES.FAILED)}
                       title={'Αποτυχία'}/>
            <CheckBoxL value={lessonState.CANCELLED} onClick={() => filterByState(LESSON_STATES.CANCELLED)}
                       title={'Ακύρωση'}/>
            <CheckBoxL value={lessonState.NO_PARTICIPATION}
                       onClick={() => filterByState(LESSON_STATES.NO_PARTICIPATION)} title={'Δε δόθηκε'}/>
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

const SortingItem = ({filterSortBy, configBy, title}) => {
    return (
        <ListItem>
            <CheckBox checked={filterSortBy === configBy}/>
            <Body>
            <Text>{title}</Text>
            </Body>
        </ListItem>
    );
};

const Sorting = ({filterSortBy, configBys}) => {
    return (
        <View>
            <Text>Ταξινόμηση</Text>
            <SortingItem filterSortBy={filterSortBy} configBy={configBys.enrollDate} title={'Ημερομηνία δήλωσης'}/>
            <SortingItem filterSortBy={filterSortBy} configBy={configBys.grade} title={'Βαθμός'}/>
            <SortingItem filterSortBy={filterSortBy} configBy={configBys.semester} title={'Εξάμηνο'}/>
        </View>
    );
};

const OrderItem = ({filterSortOrder, configOrder, title}) => {
    return (
        <ListItem>
            <CheckBox checked={filterSortOrder === configOrder}/>
            <Body>
            <Text>{title}</Text>
            </Body>
        </ListItem>
    );
};

const Order = ({filterSortOrder, configOrders}) => {
    return (
        <View>
            <Text>Κατάταξη</Text>
            <OrderItem filterSortOrder={filterSortOrder} configOrder={configOrders.desc} title={'Φθίνουσα'}/>
            <OrderItem filterSortOrder={filterSortOrder} configOrder={configOrders.asc} title={'Αύξουσα'}/>
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