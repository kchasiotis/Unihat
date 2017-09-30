import { connect } from 'react-redux'
// todo: (refactor) ChartScreen to ChartScreenComponent
import ChartScreen from './components/chartScreen'

// todo: (refactor) refactor grades to lessons
const mapStateToProps = (state) => {
    return {allGrades: state.filter.lessons}
};

const ChartScreenRedux = connect(
    mapStateToProps
)(ChartScreen);

export {ChartScreenRedux as ChartScreen};