import LogoutComponent from '../components/logout'
import {connect} from 'react-redux'
import {actions} from '../../login';

const mapDispatchToProps = dispatch => {
    return {
        setLoginState: (state) => {
            dispatch(actions.setLoginState(state));
        }
    };
};

const logoutRedux = connect(
    null,
    mapDispatchToProps
)(LogoutComponent);

export {logoutRedux as Logout};
