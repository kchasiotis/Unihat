import React, {Component} from 'react';
import {ListItem, Right, Text, Badge, Body} from 'native-base';
import {ListView} from 'react-native';

function InitializeLessonList(grades) {
    return function LessonListEm(props) {
        return (
            <LessonList grades={grades}/>
        )
    }
}

class LessonList extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.grades),
        };
    }

    render() {
        if(this.props.grades.length === 0 ) return <Text>Άδεια λίστα μαθημάτων</Text>;

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(lesson) =>
                    <ListItem key={lesson.id}>
                        <Body>
                        <Text>{lesson.title}</Text>
                        </Body>
                        <Right>
                            {
                                lesson.grade !== '' ?
                                    <Badge success={lesson.grade>=5} danger={lesson.grade<5}>
                                        <Text>{lesson.grade}</Text>
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
