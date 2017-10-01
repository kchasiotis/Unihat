import React, {Component} from 'react';
import {View} from "native-base";
import CheckBoxBtm from "./checkBoxBtm";
import FilterCard from "./filterCard";

export default class Order extends Component {
    constructor(props) {
        super(props);
        const {filterSortOrder} = this.props;

        this.state = {radioGroup: {asc: false, desc: false}};
        this.state.radioGroup[filterSortOrder] = true;
    }

    onClick(configOrder) {
        return function () {
            let newState = {asc: false, desc: false};
            newState[configOrder] = true;
            this.setState({radioGroup: newState});
            this.props.setOrderBy(configOrder);
        }.bind(this)
    }

    render() {
        const {radioGroup} = this.state;
        const {configOrders} = this.props;

        return (
            <FilterCard title={'Κατάταξη'}>
                <View style={style.checkboxRow}>
                    <CheckBoxBtm value={radioGroup.desc} title={'Φθίνουσα'} onClick={this.onClick(configOrders.desc)}/>
                    <CheckBoxBtm value={radioGroup.asc} title={'Αύξουσα'} onClick={this.onClick(configOrders.asc)}/>
                </View>
            </FilterCard>
        );

    }
}

const style = {
    cardTitle: {fontWeight: 'bold', color: '#333'},
    checkboxRow: {flex: 1, flexDirection: 'row'}
};