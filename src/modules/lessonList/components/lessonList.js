import React, {Component} from 'react';
import {ListItem, Right, Text, Badge, Body} from 'native-base';
import {FlatList, RefreshControl} from 'react-native';

import Crawler from '../../../tools/crawler';
import CredentialStorage from '../../../tools/credentialStorage';
import lesson from '../../lesson/components/lesson';
import {AppState, AsyncStorage} from 'react-native'

class LessonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            appState: AppState.currentState
        };
        this.crawler = new Crawler();
        this.refreshLessons = this.refreshLessons.bind(this);
        this.openLesson = this.openLesson.bind(this);
    }

    refreshLessons() {
        this.setState({refreshing: true});

        let onResponse = (loggedIn, allGrades) => {
            this.setState({refreshing: false});
            if (loggedIn) this.props.updateGrades(allGrades);
        };
        onResponse = onResponse.bind(this);

        CredentialStorage.load((username, password) =>
            this.crawler.fetchPage(username, password, onResponse)
        );
    }

    openLesson(lesson) {
        return () => {
            this.props.setCurrentLesson(lesson);
            this.props.getLessonStatistics(lesson);
            this.props.navigation.navigate('lesson');
        }
    }


    componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    _handleAppStateChange = (nextAppState) => {
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
            AsyncStorage.getItem('refresh', (err, action) => {
                if (err) {
                    console.log(err);
                    return;
                }
                action = JSON.parse(action);

                if(this.props.routeName === 'exGrades' && action.shouldRefresh === true) {
                    this.refreshLessons();
                    AsyncStorage.setItem('refresh', JSON.stringify({shouldRefresh: false}));
                }
            })
        }
        this.setState({appState: nextAppState});
    };

    render() {
        // if (this.props.grades.length === 0) return <Text>Άδεια λίστα μαθημάτων</Text>;

        return (
            <FlatList
                keyExtractor={(item) => (item.id)}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.refreshLessons}
                        title="Pull to refresh"
                        colors={['#3F51B5', 'green']}
                        progressBackgroundColor='#fff'
                    />
                }
                data={this.props.grades}
                renderItem={({item}) =>
                    <ListItem onPress={this.openLesson(item)}>
                        <Body>
                        <Text>{item.title}</Text>
                        </Body>
                        <Right>
                            {
                                item.grade !== null ?
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

export default LessonList;
