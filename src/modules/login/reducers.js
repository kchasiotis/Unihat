import {SET_GRADES} from './actions'
import {SET_LOGIN_STATE} from './actions'
import {RESET_STATE} from './actions'
import {LoginState} from './actions'
import env from '../../../environment'

function grades(state = {}, action) {
    switch (action.type) {
        case SET_GRADES:
            return Object.assign({}, action.grades);
        default:
            return state;
    }
}

function user(state = {loginState: env ? LoginState.LOADING : LoginState.INITIAL}, action) {
    switch (action.type) {
        case SET_LOGIN_STATE:
            return Object.assign({}, {loginState: action.login_state});
        case RESET_STATE:
            return Object.assign({}, {loginState: LoginState.INITIAL});
        default:
            return state;
    }
}

export {grades};
export {user};