import Login from './components/login'

import {connect} from 'react-redux'
import {SET_LOGIN_STATE, RESET_STATE, SET_GRADES, SET_CURRENT_LESSON} from './actions';
import {login, resetState, setLoginState, setGrades, setCurrentLesson} from './actions';
import {grades, user} from './reducers';

const mapStateToProps = (state) => {
    return {
        loginState: state.user.loginState
    }
};

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => {
            dispatch(login(username, password));
        },
        resetState: () => {
            dispatch(resetState());
        }
    };
};

const loginRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

const actions = {login, resetState, setLoginState, setGrades, setCurrentLesson};
const actionTypes = {SET_LOGIN_STATE, RESET_STATE, SET_GRADES, SET_CURRENT_LESSON};
const reducers = {grades, user};

export {loginRedux as Login};
export {actions};
export {actionTypes};
export {reducers};
