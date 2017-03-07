import React, {Component} from 'react';
import {Content, ListItem, Right, Text, Badge} from 'native-base';


class LessonList extends Component {
    render() {
        return (
            <Content>
                <ListItem>
                    <Text>Λογική Σχεδίαση</Text>
                    <Right>
                        <Badge success>
                            <Text>9</Text>
                        </Badge>
                    </Right>
                </ListItem>
            </Content>
        );
    }
}

export default LessonList;
