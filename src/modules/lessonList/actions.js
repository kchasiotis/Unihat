import * as actionTypes from './actionTypes'

export const setFilters = (filters) => {
    return {
        type: actionTypes.SET_FILTERS,
        filters: filters
    }
};

export const applyFilters = () => {
    return {
        type: actionTypes.APPLY_FILTERS
    }
};

export const setLessons = (lessons) => {
    return {
        type: actionTypes.SET_LESSONS,
        lessons: lessons
    }
};

export const setLessonStates = (LESSON_STATES) => {
    return {
        type: actionTypes.SET_LESSON_STATES,
        LESSON_STATES: LESSON_STATES
    }
};