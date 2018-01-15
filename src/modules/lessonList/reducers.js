import * as actionTypes from './actionTypes'

let moment = require('moment');

const {filterSortConfig} = actionTypes;

// todo: (priority 1)(ui) Add exemption
function filter(state = {
    lessons: {aGrades: [], exGrades: [], sGrades: []},
    filteredLessons: [],
    LESSON_STATES: null,
    lessonState: {SUCCEEDED: true, NO_PARTICIPATION: false, FAILED: true, CANCELLED: true, EXEMPTION: false},
    gradeRange: {from: 0, to: 10},
    sort: {by: filterSortConfig.by.enrollDate, order: filterSortConfig.order.desc}
}, action) {
    const {SET_FILTERS, SET_LESSONS, APPLY_FILTERS, SET_LESSON_STATES} = actionTypes;
    let lessons;

    switch (action.type) {
        case SET_FILTERS:
            return Object.assign({}, action.filters);
        case APPLY_FILTERS:
            lessons = applyFilters(state.lessons.aGrades, state);

            return Object.assign({}, state, {filteredLessons: lessons});
        case SET_LESSON_STATES:
            return Object.assign({}, state, {LESSON_STATES: action.LESSON_STATES});
        case SET_LESSONS:
            lessons = applyFilters(action.lessons.aGrades, state);

            return Object.assign({}, state, {lessons: action.lessons, filteredLessons: lessons});
        default:
            return state;
    }
}

function applyFilters(lessons, state) {
    const {gradeRange, lessonState, LESSON_STATES, sort} = state;
    for (let key in LESSON_STATES) {
        if (lessonState[key] === false) {
            lessons = lessons.filter((lesson) => lesson.state !== LESSON_STATES[key]);
        }
    }

    if (gradeRange.from !== undefined && gradeRange.to !== undefined) {
        lessons = lessons.filter((lesson) => lesson.grade >= gradeRange.from && lesson.grade <= gradeRange.to);
    }

    let desc = sort.order === 'desc';
    switch (sort.by) {
        case filterSortConfig.by.enrollDate:
            lessons.sort((lessonA, lessonB) => {
                if (desc) {
                    return -moment(lessonA.enrollDate, "DD-MM-YYYY").diff(moment(lessonB.enrollDate, "DD-MM-YYYY"), 'days');
                } else {
                    return moment(lessonA.enrollDate, "DD-MM-YYYY").diff(moment(lessonB.enrollDate, "DD-MM-YYYY"), 'days');
                }
            });
            break;
        case filterSortConfig.by.grade:
            lessons.sort((lessonA, lessonB) => {
                if (desc) {
                    return -(lessonA.grade - lessonB.grade);
                } else {
                    return lessonA.grade - lessonB.grade;
                }
            });
            break;
        case filterSortConfig.by.semester:
            lessons.sort((lessonA, lessonB) => {
                if (desc) {
                    return -(lessonA.semester - lessonB.semester);
                } else {
                    return lessonA.semester - lessonB.semester;
                }
            });
            break;
    }

    return lessons;
}

export {filter}