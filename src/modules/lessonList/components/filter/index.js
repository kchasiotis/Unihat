import React, {Component} from 'react';
import {View, Content} from 'native-base';
import LessonStates from "./lessonStates";
import GradeSlider from "./gradeSlider";
import Sorting from "./sorting";
import Order from "./order";
import FilterButton from "./filterButton";
import Theme from '../../styling/filterColorScheme'

class Filter extends Component {
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
        const {filterSortConfig, LESSON_STATES, theme} = this.props;

        return (
            <View style={{flex: 1, backgroundColor: theme.backgroundColor}}>
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
                <FilterButton/>
            </View>
        );
    }
}

Filter.defaultProps = {
    theme: {backgroundColor: Theme.backgroundColor}
};

export default Filter;