import React from 'react';
import {CardItem, ListItem, Content, Text, Icon, Right, Badge, List} from 'native-base';
import Statistics from './statistics';
import {NavigationActions} from 'react-navigation'
import {StatusBar} from "react-native";
import {lessonStateColor} from "../../../tools/colors";
var Color = require('color');

class Lesson extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        const backAction = NavigationActions.back({
            key: null
        });

        this.props.navigation.dispatch(backAction);
    }

    render() {
        let currentLesson = this.props.navigation.state.params;

        //todo: increase back button press area
        return (
            <Content style={{backgroundColor: 'white'}}>
                <StatusBar
                    backgroundColor={Color(lessonStateColor(currentLesson.state)).darken(0.3)}
                    barStyle="light-content"
                />
                <CardItem header style={{backgroundColor: lessonStateColor(currentLesson.state)}}>
                    <Icon name="arrow-back" onPress={this.goBack} style={{color: 'white'}}/>
                    <Text style={lessonStyle.headerText}>{currentLesson.title}</Text>
                </CardItem>

                <List>
                    <ListItem>
                        <Text style={lessonStyle.itemTitle}>Βαθμός</Text>
                        {
                            currentLesson.grade !== null ?
                                <Right style={lessonStyle.itemRight}>
                                    <Badge success={currentLesson.grade >= 5}>
                                        <Text>{currentLesson.grade}</Text>
                                    </Badge>
                                </Right> :
                                null
                        }
                    </ListItem>
                    {
                        currentLesson.semester !== null ?
                            <ListItem>
                                <Text style={lessonStyle.itemTitle}>Εξάμηνο</Text>
                                <Right style={lessonStyle.itemRight}>
                                    <Badge style={{backgroundColor: 'gray'}}>
                                        <Text>{currentLesson.semester + 'ο'}</Text>
                                    </Badge>
                                </Right>
                            </ListItem> :
                            null
                    }
                    <ListItem>
                        <Text style={lessonStyle.itemTitle}>Κατάσταση</Text>
                        <Right style={lessonStyle.itemRight}>
                            <Badge style={{backgroundColor: lessonStateColor(currentLesson.state)}}>
                                <Text>{currentLesson.state}</Text>
                            </Badge>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Text style={lessonStyle.itemTitle}>Ημερομηνία δήλωσης</Text>
                        <Right style={lessonStyle.itemRight}>
                            <Text style={lessonStyle.itemContent}>{currentLesson.enrollDate}</Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Text style={lessonStyle.itemTitle}>Ημερομηνία Εξέτασης</Text>
                        <Right style={lessonStyle.itemRight}>
                            <Text style={lessonStyle.itemContent}>{currentLesson.examDate}</Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Text style={lessonStyle.itemTitle}>Κωδικός</Text>
                        <Right style={lessonStyle.itemRight}>
                            <Text style={lessonStyle.itemContent}>{currentLesson.code}</Text>
                        </Right>
                    </ListItem>
                </List>
                <Statistics lesson={currentLesson}/>
            </Content>
        );
    }
}

//todo: change colors according to lesson state
const lessonStyle = {
    header: (grade) => {
        return grade >= 5 ? '#5CB85C' : '#ED1727';
    },
    statusBar: (grade) => {
        return grade >= 5 ? '#4a9b4a' : '#af131f';
    },
    headerText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    },
    itemTitle: {
        fontWeight: 'normal'
    },
    itemContent: {
        color: 'gray'
    },
    itemRight: {
        flex: 1 // todo: (priority 3) remove if possible
    }
};

export default Lesson;