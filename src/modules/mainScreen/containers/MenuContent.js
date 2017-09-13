import MenuContent from '../components/MenuContent'
import {connect} from 'react-redux'
import {actions} from '../../login';

const mapDispatchToProps = dispatch => {
    return {
        setLoginState: (state) => {
            dispatch(actions.setLoginState(state));
        }
    };
};

const menuContentRedux = connect(
    null,
    mapDispatchToProps
)(MenuContent);

export {menuContentRedux as MenuContent};
