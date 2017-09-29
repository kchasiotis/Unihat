import React from 'react';
import {connect} from 'react-redux'


import FilterComponent from '../components/filter'
import {filterSortConfig} from '../actionTypes'
import {setFilters} from '../actions'
import {STATES as LESSON_STATES} from '../../../tools/crawler/lesson'

const mapStateToProps = (state) => {
    return {filter: state.filter, filterSortConfig: filterSortConfig, LESSON_STATES: LESSON_STATES, user: state.user};
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilters: (filters) => {
            dispatch(setFilters(filters));
        }
    }
};

const FilterRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterComponent);

export {FilterRedux as Filter};