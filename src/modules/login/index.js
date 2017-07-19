import Login from './components/login'

import {connect} from 'react-redux'
import {SET_GRADES, setGrades} from './actions';
import {grades} from './reducers';

const mapDispatchToProps = dispatch => {
    return {
        setGrades: grades => {
            dispatch(setGrades(grades))
        }
    };
};

const loginRedux = connect(
    null,
    mapDispatchToProps
)(Login);

const actions = {setGrades};
const actionTypes = {SET_GRADES};
const reducers = {grades};

export {loginRedux as Login};
export {actions};
export {actionTypes};
export {reducers};
