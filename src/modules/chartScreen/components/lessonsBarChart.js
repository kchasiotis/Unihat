import React, {Component} from "react";
import {VictoryChart, VictoryBar, VictoryTheme} from "victory-native";

export default class LessonsBarChart extends Component {
    render() {
        return (
            <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={10}
            >
                <VictoryBar
                    style={{ data: { fill: "#c43a31" } }}
                    data={[
                        { x: 1, y: 2, y0: 1, width: 4 },
                        { x: 2, y: 3, y0: 2, width: 6 },
                        { x: 3, y: 5, y0: 2, width: 8 },
                        { x: 4, y: 4, y0: 3, width: 10 },
                        { x: 5, y: 6, y0: 3, width: 12 }
                    ]}
                />
            </VictoryChart>
        );
    }
}
