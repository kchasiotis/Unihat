import {FILTER_BY_STATE, FILTER_GRADE_RANGE, SORT_BY, SORT_ORDER, filterSortConfig} from './actions'

function filter(state = {
    lessonState: {SUCCEEDED: false, NO_PARTICIPATION: false, FAILED: false, CANCELLED: false},
    gradeRange: {},
    sort: {by: filterSortConfig.by.enrollDate, order: filterSortConfig.order.desc}
}, action) {
    switch (action.type) {
        case FILTER_BY_STATE:
            return Object.assign({}, state, {lessonState: action.filterByState});
            break;
        case FILTER_GRADE_RANGE:
            if(state.gradeRange.from === 0 && state.gradeRange.to === 10)
                return Object.assign({}, state, {gradeRange: {}});

            return Object.assign({}, state, {gradeRange: action.filterGradeRange});
            break;
        case SORT_BY:
            return Object.assign({}, state, {sort: {by: action.sortBy}});
            break;
        case SORT_ORDER:
            return Object.assign({}, state, {sort: {order: action.sortOrder}});
            break;
        default:
            return state;
    }
}

export {filter}