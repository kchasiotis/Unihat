import React, {Component} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {Icon} from 'native-base';

export default class ChartTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {descVisible: false};

        this.showDescription = this.showDescription.bind(this);
    }

    showDescription() {
        this.setState({descVisible: !this.state.descVisible});
    }

    render() {
        const {descVisible} = this.state;

        return (
            <View>
                <TouchableOpacity onPress={this.showDescription} style={nbStyles.wrapper}>
                    <Text style={nbStyles.header}>{this.props.title}</Text>
                    <Icon style={nbStyles.pieChartIcon} name={descVisible ? 'ios-arrow-up' : 'ios-arrow-down'}/>
                </TouchableOpacity>
                {
                    descVisible ?
                        <Text style={nbStyles.description}>{this.props.description}</Text> :
                        null
                }
            </View>
        )
    }
}


let nbStyles = {
    header: {
        color: 'black',
        fontWeight: 'bold',
        width: 0,
        flexGrow: 1,
    },
    wrapper: {
        flexDirection: 'row',
        padding: 4
    },
    description: {
        color: 'black',
        padding: 4
    },
    pieChartIcon: {
        fontSize: 20,
        marginLeft: 3
    }
};