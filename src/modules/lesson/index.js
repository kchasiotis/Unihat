import lesson from './components/lesson'

import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        currentLesson: state.user.currentLesson
    }
};

const lessonRedux = connect(
    mapStateToProps
)(lesson);

export {lessonRedux as Lesson};