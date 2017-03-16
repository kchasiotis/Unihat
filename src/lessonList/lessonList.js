import React, {Component} from 'react';
import {Content, ListItem, Right, Text, Badge, Body, List} from 'native-base';


class LessonList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listItems = this.props.grades.map((lesson) =>
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
        );

        return (
            <Content>
                <List>
                    {listItems}
                </List>
            </Content>
        );
    }
}

export default LessonList;
