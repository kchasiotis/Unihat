import React from 'react';
import {connect} from 'react-redux'

import LessonList from '../components/lessonList'
import {actions} from '../../login'

const mapStateToProps = (state, ownProps) => {
    switch (ownProps.routeName) {
        case 'aGrades':
            return {grades: state.grades.aGrades};
        case 'exGrades':
            return {grades: state.grades.exGrades};
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateGrades: (grades) => {
            dispatch(actions.setGrades(grades))
        }
    }
};

const LessonListRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(LessonList);

export {LessonListRedux as LessonList};