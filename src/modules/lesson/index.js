import lesson from './components/lesson'

import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        currentLesson: state.appState.currentLesson,
        lessonList: state.appState.lessonList
    }
};

const lessonRedux = connect(
    mapStateToProps
)(lesson);

export {lessonRedux as Lesson};