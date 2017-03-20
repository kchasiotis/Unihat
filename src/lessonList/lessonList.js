import React, {Component} from 'react';
import {ListItem, Right, Text, Badge, Body} from 'native-base';
import {ScrollView, ListView} from 'react-native';

function screenGrades(routeName, allGrades) {
    let grades;
    switch (routeName) {
        case 'aGrades':
            grades = allGrades.aGrades;
            break;
        case 'sGrades':
            grades = allGrades.sGrades;
            break;
        case 'exGrades':
            grades = allGrades.exGrades;
            break;
        case 'emGrades':
            grades = allGrades.emGrades;
            break;
    }
    return grades;
}

function InitializeLessonList(gradesStr) {
    return function LessonListEm(props) {
        let grades = screenGrades(gradesStr, props.screenProps.allGrades);
        //todo: remove grades of other views
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
