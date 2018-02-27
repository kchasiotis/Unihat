import React, {Component} from "react";

import {VictoryPie} from "victory-native";
import {View} from "react-native";

export default class AveragePieChart extends Component {
    render() {
        if (this.props.pieSize === 0) return null;

        const {total, value, pieSize} = this.props;

        let data = [{
            "x": 1,
            "y": Number(value),
            "label": value
        }];

        if (total !== value) {
            let rem = Math.round(((total - value) * 100)) / 100;
            data.push({
                "x": 2,
                "y": rem,
                "label": ' '
            });
        }

        // let fillColor = {'r': 240, 'g': 240, 'b': 240};
        // let mainColor = {'r': 51, 'g': 202, 'b': 70};

        return (
            <View style={{height: pieSize, justifyContent: 'center', alignItems: 'center'}}>
                <VictoryPie
                    height={pieSize * 1.3}
                    padAngle={3}
                    labelRadius={40}
                    innerRadius={pieSize / 7}
                    style={{labels: {fill: "black", fontSize: 15, fontWeight: "bold"}}}
                    colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                    data={data}
                />
            </View>
        );
    }
}
