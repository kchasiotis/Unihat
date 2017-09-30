import * as actionTypes from './actionTypes'

export const setFilters = (filters) => {
    return {
        type: actionTypes.SET_FILTERS,
        filters: filters
    }
};

export const setLessons = (lessons) => {
    return {
        type: actionTypes.SET_LESSONS,
        lessons: lessons
    }
};