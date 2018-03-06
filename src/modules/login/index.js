import LoginComponent from './components/login'

import {connect} from 'react-redux'
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import * as reducers from './reducers';

const mapStateToProps = (state) => {
    return {
        loginState: state.appState.loginState
    }
};

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password, chkBox) => {
            dispatch(actions.login(username, password, chkBox));
        },
        resetState: () => {
            dispatch(actions.resetState());
        },
        setLoginState: (state) => {
            dispatch(actions.setLoginState(state));
        }
    };
};

const loginRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);


export {loginRedux as Login};
export {actions};
export {actionTypes};
export {reducers};
