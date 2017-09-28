import React from 'react';
import {connect} from 'react-redux'
let moment = require('moment');

import LessonList from '../components/lessonList'
import {actions} from '../../login'
import {filterSortConfig} from '../actions'
import {STATES as LESSON_STATES} from '../../../tools/crawler/lesson'

const mapStateToProps = (state, ownProps) => {
    let lessons = null;
    switch (ownProps.routeName) {
        case 'aGrades':
            lessons = state.grades.aGrades;
            break;
        case 'exGrades':
            lessons = state.grades.exGrades;
            break;
    }

    if(state.grades.aGrades === undefined) return state;

    const {gradeRange, lessonState, sort} = state.filter;
    for (let key in LESSON_STATES) {
        if (lessonState[key] === false) {
            lessons = lessons.filter((lesson) => lesson.state !== LESSON_STATES[key])
        }
    }

    if (gradeRange.from !== undefined && gradeRange.to !== undefined) {
        lessons = lessons.filter((lesson) => lesson.grade >= gradeRange.from && lesson.grade <= gradeRange.to)
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

    return {grades: lessons};
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateGrades: (grades) => {
            dispatch(actions.setGrades(grades));
        },
        setCurrentLesson: (lesson) => {
            dispatch(actions.setCurrentLesson(lesson));
        },
        getLessonStatistics: (lesson) => {
            dispatch(actions.getLessonStatistics(lesson));
        }
    }
};

const LessonListRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(LessonList);

export {LessonListRedux as LessonList};