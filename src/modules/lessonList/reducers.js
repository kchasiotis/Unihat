import * as actionTypes from './actionTypes'

const {filterSortConfig} = actionTypes;

// todo: (priority 1)(ui) Add exemption
// todo: (refactor) lessons to lessonsLists
function filter(state = {
    lessons: {aGrades: [], exGrades: [], sGrades: []},
    filteredLessons: [],
    lessonState: {SUCCEEDED: true, NO_PARTICIPATION: false, FAILED: true, CANCELLED: true, EXEMPTION: false},
    gradeRange: {from: 0, to: 10},
    sort: {by: filterSortConfig.by.enrollDate, order: filterSortConfig.order.desc}
}, action) {
    const {SET_FILTERS, SET_LESSONS} = actionTypes;

    switch (action.type) {
        case SET_FILTERS:
            return Object.assign({}, action.filters);
            break;
        case SET_LESSONS:
            return Object.assign({}, state, {lessons: action.lessons});
        default:
            return state;
    }
}

export {filter}