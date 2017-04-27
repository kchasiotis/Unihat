import React, {Component} from 'react';
import {ListItem, Right, Text, Badge, Body} from 'native-base';
import {FlatList} from 'react-native';

function InitializeLessonList(grades) {
    return function LessonListEm(props) {
        return (
            <LessonList grades={grades}/>
        )
    }
}

class LessonList extends Component {
    render() {
        if (this.props.grades.length === 0) return <Text>Άδεια λίστα μαθημάτων</Text>;

        return (
            <FlatList
                keyExtractor={(item) => (item.id)}
                data={this.props.grades}
                renderItem={({item}) =>
                    <ListItem>
                        <Body>
                        <Text>{item.title}</Text>
                        </Body>
                        <Right>
                            {
                                item.grade !== '' ?
                                    <Badge success={item.grade >= 5} danger={item.grade < 5}>
                                        <Text>{item.grade}</Text>
                                    </Badge> :
                                    null
                            }
                        </Right>
                    </ListItem>
                }
            />
        );
    }
}

export default InitializeLessonList;
