import React from 'react';
import {connect} from 'react-redux'

import FilterComponent from '../components/filter'
import {filterSortConfig} from '../actionTypes'
import {setFilters, applyFilters} from '../actions'

const mapStateToProps = (state) => {
    return {filter: state.filter, filterSortConfig: filterSortConfig, user: state.user};
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilters: (filters) => {
            dispatch(setFilters(filters));
        },
        applyFilters: ()=> {
            dispatch(applyFilters());
        }
    }
};

const FilterRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterComponent);

export {FilterRedux as Filter};