import lesson from './components/lesson'

import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        currentLesson: state.user.currentLesson,
        lessonList: state.user.lessonList
    }
};

const lessonRedux = connect(
    mapStateToProps
)(lesson);

export {lessonRedux as Lesson};