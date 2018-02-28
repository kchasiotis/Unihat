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
            <View style={{height: pieSize, justifyContent: 'center', alignItems: 'center'}} pointerEvents="none">
                <VictoryPie
                    height={pieSize * 1.6 - pieSize/3}
                    padAngle={3}
                    innerRadius={pieSize / 4}
                    style={{labels: {fill: "black", fontSize: pieSize / 12, fontWeight: "bold"}}}
                    colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                    data={data}
                />
            </View>
        );
    }
}
