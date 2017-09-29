import * as actionTypes from './actionTypes'

export const setFilters = (filters) => {
    return {
        type: actionTypes.SET_FILTERS,
        filters: filters
    }
};
