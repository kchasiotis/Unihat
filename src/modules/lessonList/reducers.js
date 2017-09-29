import * as actionTypes from './actionTypes'

const {filterSortConfig} = actionTypes;

// todo: Add exemption to ui
function filter(state = {
    lessonState: {SUCCEEDED: true, NO_PARTICIPATION: false, FAILED: true, CANCELLED: true, EXEMPTION: false},
    gradeRange: {from: 0, to: 10},
    sort: {by: filterSortConfig.by.enrollDate, order: filterSortConfig.order.desc}
}, action) {
    const {SET_FILTERS} = actionTypes;

    switch (action.type) {
        case SET_FILTERS:
            return Object.assign({}, action.filters);
            break;
        default:
            return state;
    }
}

export {filter}