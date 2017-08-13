import React, {Component} from 'react';
import {
    Card,
    CardItem,
    Content,
    Text,
    Right,
    Icon,
    Badge
} from 'native-base'

export default Lesson = ({currentLesson, navigation}) => {
    console.log(navigation);
    if (currentLesson === null) return null;


    return (
        <Content>
            <Card>
                <CardItem header style={{backgroundColor: currentLesson.grade >= 5 ? '#5CB85C' : '#ED1727'}}>
                    <Text style={lessonStyle.header}>{currentLesson.title}</Text>
                </CardItem>
                <CardItem icon>
                    {/*<Icon active name="logo-googleplus"/>*/}
                    <Text style={lessonStyle.itemTitle}>Βαθμός</Text>
                    <Right>
                        <Badge success={currentLesson.grade >= 5}>
                            <Text>{currentLesson.grade}</Text>
                        </Badge>
                    </Right>
                </CardItem>
                <CardItem icon>
                    <Text style={lessonStyle.itemTitle}>Εξάμηνο</Text>
                    <Right>
                        <Badge style={{backgroundColor: 'gray'}}>
                            <Text>{currentLesson.semester + 'ο'}</Text>
                        </Badge>
                    </Right>
                </CardItem>
                <CardItem icon>
                    <Text style={lessonStyle.itemTitle}>Ημερομηνία δήλωσης</Text>
                    <Right>
                        <Text style={lessonStyle.itemContent}>{currentLesson.enrollDate}</Text>
                    </Right>
                </CardItem>
                <CardItem icon>
                    <Text style={lessonStyle.itemTitle}>Ημερομηνία Εξέτασης</Text>
                    <Right>
                        <Text style={lessonStyle.itemContent}>{currentLesson.examDate}</Text>
                    </Right>
                </CardItem>
                <CardItem icon>
                    <Text style={lessonStyle.itemTitle}>Κωδικός</Text>
                    <Right>
                        <Text style={lessonStyle.itemContent}>{currentLesson.code}</Text>
                    </Right>
                </CardItem>
            </Card>
        </Content>
    );
}

const lessonStyle = {
    header: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    },
    itemTitle:{
        fontWeight:'normal'
    },
    itemContent: {
        color: 'gray'
    }
};