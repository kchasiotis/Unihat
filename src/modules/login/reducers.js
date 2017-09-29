import * as actionTypes from './actionTypes'

const {LoginState} = actionTypes;

function grades(state = {}, action) {
    const {SET_GRADES} = actionTypes;

    switch (action.type) {
        case SET_GRADES:
            return Object.assign({}, state, action.grades);
        default:
            return state;
    }
}

function appState(state = {loginState: LoginState.INITIAL}, action) {
    const {SET_LOGIN_STATE, RESET_STATE} = actionTypes;

    switch (action.type) {
        case SET_LOGIN_STATE:
            return Object.assign({}, state, {loginState: action.login_state});
        case RESET_STATE:
            return Object.assign({}, state, {loginState: LoginState.INITIAL});
        default:
            return state;
    }
}

function user(state = {username: null, department: null}, action) {
    const {SET_USER} = actionTypes;

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

            return Object.assign({}, state, {username: username}, {department: department});
        default:
            return state
    }
}

export {grades};
export {appState};
export {user};