import React from 'react';
import {connect} from 'react-redux'


import FilterComponent from '../components/filter'
import {filterSortConfig, sortOrder, sortBy, filterByState, filterGradeRange, setFilters} from '../actions'
import {STATES as LESSON_STATES} from '../../../tools/crawler/lesson'

const mapStateToProps = (state) => {
    return {filter: state.filter, filterSortConfig: filterSortConfig, LESSON_STATES: LESSON_STATES};
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilters: (filters) => {
            dispatch(setFilters(filters));
        },
        sortOrder: (filter) => {
            dispatch(sortOrder(filter));
        },
        sortBy: (filter) => {
            dispatch(sortBy(filter));
        },
        filterByState: (lessonState) => {
            dispatch(filterByState(lessonState));
        },
        filterGradeRange: (filter) => {
            dispatch(filterGradeRange(filter));
        }
    }
};

const FilterRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterComponent);

export {FilterRedux as Filter};