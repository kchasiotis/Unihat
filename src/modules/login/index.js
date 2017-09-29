import Login from './components/login'

import {connect} from 'react-redux'
import {SET_LOGIN_STATE, RESET_STATE, SET_GRADES, LoginState} from './actions';
import {login, resetState, setLoginState, setGrades} from './actions';
import {grades, appState, user} from './reducers';

const mapStateToProps = (state) => {
    return {
        loginState: state.appState.loginState
    }
};

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password, chkBox) => {
            dispatch(login(username, password, chkBox));
        },
        resetState: () => {
            dispatch(resetState());
        },
        setLoginState: (state) => {
            dispatch(setLoginState(state));
        }
    };
};

const loginRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

const actions = {login, resetState, setLoginState, setGrades};
const actionTypes = {SET_LOGIN_STATE, RESET_STATE, SET_GRADES, LoginState};
const reducers = {grades, appState, user};

export {loginRedux as Login};
export {actions};
export {actionTypes};
export {reducers};
