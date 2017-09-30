import { connect } from 'react-redux'
import ChartScreenComp from './components/chartScreen'

const mapStateToProps = (state) => {
    return {lessonsLists: state.filter.lessons}
};

const ChartScreenRedux = connect(
    mapStateToProps
)(ChartScreenComp);

export {ChartScreenRedux as ChartScreen};