import React, {Component} from 'react';
import {Card, CardItem, Content, Text, Right, Badge} from 'native-base'

const Lesson = ({currentLesson, navigation}) => {
    console.log(navigation);
    if (currentLesson === null) return null;

    return (
        <Content>
            <Card>
                <CardItem header style={lessonStyle.header(currentLesson.grade)}>
                    <Text style={lessonStyle.headerText}>{currentLesson.title}</Text>
                </CardItem>
                <CardItem>
                    {/*<CardItem icon>*/}
                    {/*<Icon active name="logo-googleplus"/>*/}
                    <Text style={lessonStyle.itemTitle}>Βαθμός</Text>
                    {
                        currentLesson.grade !== null ?
                            <Right>
                                <Badge success={currentLesson.grade >= 5}>
                                    <Text>{currentLesson.grade}</Text>
                                </Badge>
                            </Right> :
                            null
                    }
                </CardItem>
                <CardItem>
                    <Text style={lessonStyle.itemTitle}>Εξάμηνο</Text>
                    <Right>
                        <Badge style={{backgroundColor: 'gray'}}>
                            <Text>{currentLesson.semester + 'ο'}</Text>
                        </Badge>
                    </Right>
                </CardItem>
                <CardItem>
                    <Text style={lessonStyle.itemTitle}>Κατάσταση</Text>
                    <Right>
                        <Badge style={lessonStyle.lessonState(currentLesson.state)}>
                            <Text>{currentLesson.state}</Text>
                        </Badge>
                    </Right>
                </CardItem>
                <CardItem>
                    <Text style={lessonStyle.itemTitle}>Ημερομηνία δήλωσης</Text>
                    <Right>
                        <Text style={lessonStyle.itemContent}>{currentLesson.enrollDate}</Text>
                    </Right>
                </CardItem>
                <CardItem>
                    <Text style={lessonStyle.itemTitle}>Ημερομηνία Εξέτασης</Text>
                    <Right>
                        <Text style={lessonStyle.itemContent}>{currentLesson.examDate}</Text>
                    </Right>
                </CardItem>
                <CardItem>
                    <Text style={lessonStyle.itemTitle}>Κωδικός</Text>
                    <Right>
                        <Text style={lessonStyle.itemContent}>{currentLesson.code}</Text>
                    </Right>
                </CardItem>
            </Card>
        </Content>
    );
};

const lessonStyle = {
    header: (grade) => {
        return {backgroundColor: grade >= 5 ? '#5CB85C' : '#ED1727'}
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
    lessonState: (state) => {
        let color = '';
        switch (state) {
            case 'Επιτυχία':
                color = '#5CB85C';
                break;
            case 'Αποτυχία':
                color = '#ED1727';
                break;
            case 'Ακύρωση':
                color = 'black';
                break;
            case 'Δε δόθηκε':
                color = 'gray';
                break;
            default:
                color = 'gray'
        }

        return {backgroundColor: color};
    }
};

export default Lesson;