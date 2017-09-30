import React from 'react';
import {connect} from 'react-redux'

import LessonList from '../components/lessonList'
import * as actions from '../actions'

const mapStateToProps = (state, ownProps) => {
    switch (ownProps.routeName) {
        case 'aGrades':
            return {lessons: state.filter.filteredLessons};
        case 'exGrades':
            return {lessons: state.filter.lessons.exGrades};
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateLessonsLists: (lessons) => {
            dispatch(actions.setLessons(lessons));
        }
    }
};

const LessonListRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(LessonList);

export {LessonListRedux as LessonList};