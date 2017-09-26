import {
    SET_GRADES,
    SET_LOGIN_STATE,
    RESET_STATE,
    SET_CURRENT_LESSON,
    SET_LESSON_LIST,
    SET_USER,
    LoginState
} from './actions'

function grades(state = {}, action) {
    switch (action.type) {
        case SET_GRADES:
            return Object.assign({}, state, action.grades);
        default:
            return state;
    }
}

function user(state = {user: {username: null, department: null}, loginState: LoginState.INITIAL, currentLesson: null, lessonList: []}, action) {
    switch (action.type) {
        case SET_USER:
            let username = action.user.username;
            console.log(action.user);
            let department = '';
            if (username.includes('math')) {
                department = '311';
            } else if (username.includes('icsd')) {
                department = '321';
            } else if (username.includes('sas')) {
                department = '331';
            }

            return Object.assign({}, state, {user: {username: username, department: department}});
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