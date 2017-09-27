import React from 'react';
import {connect} from 'react-redux'


import FilterComponent from '../components/filter'
import {filterSortConfig, sortOrder, sortBy, filterByState, filterGradeRange} from '../actions'
import {STATES as L_STATES} from '../../../tools/crawler/lesson'

const mapStateToProps = (state, ownProps) => {
    return {filterConfig: state.filter};
};

const mapDispatchToProps = (dispatch) => {
    return {
        sortOrder: (filter) => {
            dispatch(sortOrder(filter));
        },
        sortBy: (filter) => {
            dispatch(sortBy(filter));
        },
        filterByState: (filter) => {
            dispatch(filterByState(filter));
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