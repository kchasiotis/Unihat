import React from 'react';
import {View, Content, Text, Button} from 'native-base';
import LessonStates from "./lessonStates";
import GradeSlider from "./gradeSlider";
import Sorting from "./sorting";
import Order from "./order";

export default class Filter extends React.Component {
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
        this.props.applyFilters();
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
                             showSemesterChb={this.props.user.department === '321'} setSortBy={this.setSortBy}/>

                    <Order filterSortOrder={sort.order} configOrders={filterSortConfig.order}
                           setOrderBy={this.setSortOrder}/>

                </Content>
                <Button block style={{backgroundColor: '#3F51B5'}} onPress={this.onSubmit}>
                    <Text> ΕΦΑΡΜΟΓΗ </Text>
                </Button>
            </View>
        );
    }
}
