import { connect } from 'react-redux'
import ChartScreen from './components/chartScreen'

const mapStateToProps = (state,) => {
    return {allGrades: state.grades}
};

const ChartScreenRedux = connect(
    mapStateToProps
)(ChartScreen);

export {ChartScreenRedux as ChartScreen};