import React from 'react';
import {Card, CardItem, Text, View} from "native-base";
import CheckBoxBtm from "./checkBoxBtm";

export default class Sorting extends React.Component {
    constructor(props) {
        super(props);
        const {filterSortBy} = this.props;

        this.state = {radioGroup: {enrollDate: false, grade: false, semester: false}};
        this.state.radioGroup[filterSortBy] = true;

        this.onClick = this.onClick.bind(this);
    }

    onClick(configBy) {
        return function () {
            let newState = {enrollDate: false, grade: false, semester: false};
            newState[configBy] = true;
            this.setState({radioGroup: newState});
            this.props.setSortBy(configBy);
        }.bind(this)
    }

    render() {
        const {enrollDate, grade, semester} = this.props.configBys;
        const {radioGroup} = this.state;

        return (
            <Card>
                <CardItem header>
                    <Text style={style.cardTitle}>Ταξινόμηση</Text>
                </CardItem>
                <View style={style.checkboxRow}>
                    <CheckBoxBtm value={radioGroup.enrollDate} title={'Ημ. δήλωσης'}
                                 onClick={this.onClick(enrollDate)}/>
                    <CheckBoxBtm value={radioGroup.grade} title={'Βαθμός'} onClick={this.onClick(grade)}/>
                    {
                        this.props.showSemesterChb
                            ? <CheckBoxBtm value={radioGroup.semester} title={'Εξάμηνο'}
                                           onClick={this.onClick(semester)}/>
                            : null
                    }
                </View>
            </Card>
        );
    }
};

const style = {
    cardTitle: {fontWeight: 'bold', color: '#333333'},
    checkboxRow: {flex: 1, flexDirection: 'row'}
};