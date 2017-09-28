import {FILTER_BY_STATE, FILTER_GRADE_RANGE, SORT_BY, SORT_ORDER, SET_FILTERS, filterSortConfig} from './actions'
import {STATES as LESSON_STATES} from '../../tools/crawler/lesson'

function filter(state = {
    lessonState: {SUCCEEDED: true, NO_PARTICIPATION: false, FAILED: true, CANCELLED: true},
    gradeRange: {from: 0, to: 10},
    sort: {by: filterSortConfig.by.enrollDate, order: filterSortConfig.order.desc}
}, action) {
    switch (action.type) {
        case SET_FILTERS:
            return Object.assign({}, action.filters);
            break;
        case FILTER_BY_STATE:
            let newState = state.lessonState;
            switch (action.filterByState) {
                case LESSON_STATES.SUCCEEDED:
                    newState.SUCCEEDED = !newState.SUCCEEDED;
                    break;
                case LESSON_STATES.FAILED:
                    newState.FAILED = !newState.FAILED;
                    break;
                case LESSON_STATES.CANCELLED:
                    newState.CANCELLED = !newState.CANCELLED;
                    break;
                case LESSON_STATES.NO_PARTICIPATION:
                    newState.NO_PARTICIPATION = !newState.NO_PARTICIPATION;
                    break;

            }
            return Object.assign({}, state, {lessonState: newState});
            break;
        case FILTER_GRADE_RANGE:
            if (state.gradeRange.from === 0 && state.gradeRange.to === 10)
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