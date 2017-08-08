import Login from './components/login'

import {connect} from 'react-redux'
import {SET_LOGIN_STATE, RESET_STATE, SET_GRADES, login, resetState, setLoginState, setGrades} from './actions';
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

const actions = {login, resetState, setLoginState, setGrades};
const actionTypes = {SET_LOGIN_STATE, RESET_STATE, SET_GRADES};
const reducers = {grades, user};

export {loginRedux as Login};
export {actions};
export {actionTypes};
export {reducers};
