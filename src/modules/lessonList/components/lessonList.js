import React, {Component} from 'react';
import {ListItem, Right, Text, Badge, Body, Fab, Icon, View} from 'native-base';
import {FlatList, RefreshControl} from 'react-native';

import Crawler from '../../../tools/crawler';
import {Logger} from '../../../tools/logger';
import {CredentialStorage, LocalStorage} from '../../../tools/localStorage';
import lesson from '../../lesson/components/lesson';
import {AppState} from 'react-native'
import env from '../../../../environment'

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

        let onResponse = (error, loggedIn, allGrades) => {
            if (error) {
                // todo: add error message on UI
                Logger.error(error);
            }
            this.setState({refreshing: false});
            if (!error && loggedIn) this.props.updateGrades(allGrades);
        };
        onResponse = onResponse.bind(this);

        CredentialStorage.load((error, username, password) => {
                if (error) {
                    Logger.error(error);
                    return;
                }
                this.crawler.fetchPage(username, password, onResponse)
            }
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
        if (env.debug && env.openFilter) this.props.navigation.navigate('filter');
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    _handleAppStateChange = (nextAppState) => {
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
            LocalStorage.loadRefreshGradesCond((error, refresh) => {
                if (error) {
                    Logger.error(error);
                    return;
                }

                if (this.props.routeName === 'exGrades' && refresh === true) {
                    this.setState({refreshing: true});
                    this.props.navigation.navigate('exGrades');
                    LocalStorage.loadGrades((err, grades) => {
                        this.props.updateGrades(grades);
                        this.setState({refreshing: false});
                        LocalStorage.setRefreshGradesCond(false);
                    });
                }
            })
        }
        this.setState({appState: nextAppState});
    };

    render() {
        // if (this.props.grades.length === 0) return <Text>Άδεια λίστα μαθημάτων</Text>;

        return (
            <View style={{flex: 1}}>
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
                                        <Badge style={{backgroundColor: style.badgeStyle(item.state, item.grade)}}>
                                            <Text>{item.grade}</Text>
                                        </Badge> :
                                        null
                                }
                            </Right>
                        </ListItem>
                    }
                />
                <Fab
                    active={this.state.active}
                    direction="up"
                    style={{backgroundColor: '#3F51B5'}}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('filter')}>
                    <Icon name="ios-funnel"/>
                </Fab>
            </View>
        );
    }
}

const style = {
    badgeStyle: (state, grade) => {
        if (state === 'Ακύρωση') {
            return 'black';
        }
        if (grade >= 5) return '#5CB85C';
        else return '#ED1727';
    }
};

export default LessonList;
