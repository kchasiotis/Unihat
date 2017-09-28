import React from 'react';
import {connect} from 'react-redux'

import PieChartWrapperComp from '../components/pieChartWrapper'

const mapStateToProps = (state) => {
    return {user: state.user};
};

const PieChartWrapperRedux = connect(
    mapStateToProps
)(PieChartWrapperComp);

export {PieChartWrapperRedux as PieChartWrapper};