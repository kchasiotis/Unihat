import React, {Component} from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {CheckBox, View, Content, Text, ListItem, Card, CardItem, Button} from 'native-base';

const CheckBoxBtm = ({value, onClick, title}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', flexDirection: 'column'}}>
            <ListItem style={{borderBottomWidth: 0}}>
                <CheckBox color={colorPalette.orange} checked={value}
                          onPress={onClick}/>
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

const GradeSlider = ({gradeRange, multiSliderValuesChange}) => {
    return (
        <Card>
            <CardItem header>
                <Text style={style.cardTitle}>Βαθμοί</Text>
            </CardItem>
            <View style={{marginLeft: 25, marginRight: 20}}>
                <View style={{marginBottom: 10, flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Text
                            style={{color: colorPalette.willowGrove}}>{gradeRange.from}{gradeRange.from - parseInt(gradeRange.from) === 0 ? '   ' : ''}</Text>
                    </View>
                    <Text style={{color: colorPalette.willowGrove}}>{gradeRange.to}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
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

class Sorting extends Component {
    constructor(props) {
        super(props);
        const {filterSortBy} = this.props;

        this.state = {radioGroup: {enrollDate: false, grade: false, semester: false}};
        this.state.radioGroup[filterSortBy] = true;

        this.onClick = this.onClick.bind(this);
    }

    onClick(configBy) {
        return function () {
            let newState = {enrollDate: false, grade: false, semester: false};
            newState[configBy] = true;
            this.setState({radioGroup: newState});
            this.props.setSortBy(configBy);
        }.bind(this)
    }

    render() {
        const {enrollDate, grade, semester} = this.props.configBys;
        const {radioGroup} = this.state;

        return (
            <Card>
                <CardItem header>
                    <Text style={style.cardTitle}>Ταξινόμηση</Text>
                </CardItem>
                <View style={style.checkboxRow}>
                    <CheckBoxBtm value={radioGroup.enrollDate} title={'Ημ. δήλωσης'}
                                 onClick={this.onClick(enrollDate)}/>
                    <CheckBoxBtm value={radioGroup.grade} title={'Βαθμός'} onClick={this.onClick(grade)}/>
                    {
                        this.props.showSemesterChb
                            ? <CheckBoxBtm value={radioGroup.semester} title={'Εξάμηνο'}
                                           onClick={this.onClick(semester)}/>
                            : null
                    }
                </View>
            </Card>
        );
    }
};

class Order extends Component {
    constructor(props) {
        super(props);
        const {filterSortOrder} = this.props;

        this.state = {radioGroup: {asc: false, desc: false}};
        this.state.radioGroup[filterSortOrder] = true;
    }

    onClick(configOrder) {
        return function () {
            let newState = {asc: false, desc: false};
            newState[configOrder] = true;
            this.setState({radioGroup: newState});
            this.props.setOrderBy(configOrder);
        }.bind(this)
    }

    render() {
        const {radioGroup} = this.state;
        const {configOrders} = this.props;

        return (
            <Card>
                <CardItem header>
                    <Text style={style.cardTitle}>Κατάταξη</Text>
                </CardItem>
                <View style={style.checkboxRow}>
                    <CheckBoxBtm value={radioGroup.desc} title={'Φθίνουσα'} onClick={this.onClick(configOrders.desc)}/>
                    <CheckBoxBtm value={radioGroup.asc} title={'Αύξουσα'} onClick={this.onClick(configOrders.asc)}/>
                </View>
            </Card>
        );

    }
}

export default class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = JSON.parse(JSON.stringify(this.props.filter));
    }

    multiSliderValuesChange = (values) => {
        this.setState({gradeRange: {from: values[0], to: values[1]}});
    };

    setSortBy = (value) => {
        this.setState({sort: {by: value, order: this.state.sort.order}});
    };

    setSortOrder = (value) => {
        this.setState({sort: {by: this.state.sort.by, order: value}});
    };

    filterByState = (stateAction) => {
        let newState = this.state.lessonState;
        newState[stateAction] = !newState[stateAction];

        this.setState({lessonState: newState});
    };

    onSubmit = () => {
        this.props.setFilters(this.state);
        this.props.navigation.goBack();
    };

    render() {
        const {lessonState, gradeRange, sort} = this.state;
        const {filterSortConfig, LESSON_STATES} = this.props;

        return (
            <View style={{flex: 1}}>
                <Content>
                    <LessonStates lessonState={lessonState} LESSON_STATES={LESSON_STATES}
                                  filterByState={this.filterByState}/>

                    <GradeSlider gradeRange={gradeRange}
                                 multiSliderValuesChange={this.multiSliderValuesChange}/>

                    <Sorting filterSortBy={sort.by} configBys={filterSortConfig.by}
                             showSemesterChb={this.props.user.department === 321} setSortBy={this.setSortBy}/>

                    <Order filterSortOrder={sort.order} configOrders={filterSortConfig.order}
                           setOrderBy={this.setSortOrder}/>

                </Content>
                <Button block style={{backgroundColor: colorPalette.sanMarino}} onPress={this.onSubmit}>
                    <Text> ΕΦΑΡΜΟΓΗ </Text>
                </Button>
            </View>
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