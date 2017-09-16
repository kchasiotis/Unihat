import {SET_GRADES, SET_LOGIN_STATE, RESET_STATE, SET_CURRENT_LESSON, SET_LESSON_LIST, LoginState} from './actions'
import env from '../../../environment'

function grades(state = {}, action) {
    switch (action.type) {
        case SET_GRADES:
            return Object.assign({}, state, action.grades);
        default:
            return state;
    }
}

function user(state = {loginState: LoginState.INITIAL, currentLesson: null, lessonList: []}, action) {
    switch (action.type) {
        case SET_LOGIN_STATE:
            return Object.assign({}, state, {loginState: action.login_state});
        case RESET_STATE:
            return Object.assign({}, state, {loginState: LoginState.INITIAL});
        case SET_CURRENT_LESSON:
            return Object.assign({}, state, {currentLesson: action.currentLesson}, {lessonList: []});
        case SET_LESSON_LIST:
            return Object.assign({}, state, {lessonList: action.lessonList});
        default:
            return state;
    }
}

export {grades};
export {user};