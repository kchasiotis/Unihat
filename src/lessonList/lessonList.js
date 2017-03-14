import React, {Component} from 'react';
import {Content, ListItem, Right, Text, Badge, Body} from 'native-base';


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
                    <Badge success={lesson.grade>=5} danger={lesson.grade<5}>
                        <Text>{lesson.grade}</Text>
                    </Badge>
                </Right>
            </ListItem>
        );

        return (
            <Content>
                {listItems}
            </Content>
        );
    }
}

export default LessonList;
