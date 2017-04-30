import React, {Component} from 'react';
import {ListItem, Right, Text, Badge, Body} from 'native-base';
import {FlatList, AsyncStorage} from 'react-native';

import IcarusCrawler from '../icarusCrawler/IcarusCrawler';
import CredentialStorage from '../tools/credentialStorage';

function InitializeLessonList() {
    return function LessonListEm(props) {
        return (
            <LessonList routeName={props.navigation.state.routeName}/>
        )
    }
}

class LessonList extends Component {
    constructor(props) {
        super(props);
        this.state = {grades: [], refreshing: false};
        this.crawler = new IcarusCrawler();
        this.refreshLessons = this.refreshLessons.bind(this);
    }

    componentWillMount(){
        AsyncStorage.getItem(this.props.routeName, (error, result) => {
            if (error) console.log(error);
            this.setState({grades: JSON.parse(result)})
        });
    }

    refreshLessons() {
        this.setState({refreshing: true});

        let onResponse = (loggedIn, allGrades) => {
            let state = {refreshing: false, grades: null};

            if (this.props.routeName === 'aGrades') state.grades = allGrades.aGrades;
            else if (this.props.routeName === 'exGrades') state.grades = allGrades.exGrades;
            this.setState(state);
        };
        onResponse = onResponse.bind(this);

        CredentialStorage.load((username, password) =>
            this.crawler.fetchPage(username, password, onResponse)
        );
    }

    render() {
        // if (this.props.grades.length === 0) return <Text>Άδεια λίστα μαθημάτων</Text>;

        return (
            <FlatList
                keyExtractor={(item) => (item.id)}
                onRefresh={this.refreshLessons}
                refreshing={this.state.refreshing}
                data={this.state.grades}
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
