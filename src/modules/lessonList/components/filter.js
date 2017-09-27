import React, {Component} from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {CheckBox, View, Content, Text, ListItem, Body} from 'native-base';

export default class Filter extends Component {
    constructor(props) {
        super(props);
    }

    multiSliderValuesChange = (values) => {
        this.props.filterGradeRange({from: values[0], to: values[1]});
    };

    render() {
        const {lessonState, gradeRange, sort} = this.props.filter;
        const {filterSortConfig, LESSON_STATES} = this.props;

        let space = '                                                                   ';

        return (
            <Content>
                <Text>Κατάσταση</Text>
                <ListItem>
                    <CheckBox checked={lessonState.SUCCEEDED} onPress={()=> this.props.filterByState(LESSON_STATES.SUCCEEDED)}/>
                    <Body>
                    <Text>Επιτυχία</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox checked={lessonState.FAILED} onPress={()=> this.props.filterByState(LESSON_STATES.FAILED)}/>
                    <Body>
                    <Text>Αποτυχία</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox checked={lessonState.CANCELLED} onPress={()=> this.props.filterByState(LESSON_STATES.CANCELLED)}/>
                    <Body>
                    <Text>Ακύρωση</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox checked={lessonState.NO_PARTICIPATION} onPress={()=> this.props.filterByState(LESSON_STATES.NO_PARTICIPATION)}/>
                    <Body>
                    <Text>Δε δόθηκε</Text>
                    </Body>
                </ListItem>

                <Text>Βαθμοί</Text>
                <View style={{marginTop: 30, marginLeft: 20, marginRight: 20}}>
                    <View style={{marginBottom: 10}}>
                        <Text>{gradeRange.from}{space}{gradeRange.to}</Text>
                    </View>
                    <MultiSlider
                        values={[gradeRange.from, gradeRange.to]}
                        onValuesChange={this.multiSliderValuesChange}
                        min={0}
                        max={10}
                        step={0.5}/>
                </View>

                <Text>Ταξινόμηση</Text>
                <ListItem>
                    <CheckBox checked={sort.by === filterSortConfig.by.enrollDate}/>
                    <Body>
                    <Text>Ημερομηνία δήλωσης</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox checked={sort.by === filterSortConfig.by.grade}/>
                    <Body>
                    <Text>Βαθμός</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox checked={sort.by === filterSortConfig.by.semester}/>
                    <Body>
                    <Text>Εξάμηνο</Text>
                    </Body>
                </ListItem>
                <Text>Κατάταξη</Text>
                <ListItem>
                    <CheckBox checked={sort.order === filterSortConfig.order.desc}/>
                    <Body>
                    <Text>Φθίνουσα</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox checked={sort.order === filterSortConfig.order.asc}/>
                    <Body>
                    <Text>Αύξουσα</Text>
                    </Body>
                </ListItem>
            </Content>
        );
    }
}