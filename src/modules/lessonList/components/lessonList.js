import React, {Component} from 'react';
import {FlatList, RefreshControl, AppState} from 'react-native';
import {ListItem, Right, Text, Badge, Body, View} from 'native-base';

import Crawler from '../../../tools/crawler';
import {Logger} from '../../../tools/logger';
import {CredentialStorage, LocalStorage} from '../../../tools/localStorage';
import lesson from '../../lesson/components/lesson';
import env from '../../../../environment'

const LoadingList = ({loading}) => {
    if (loading === false) return null;
    return (
        <View style={{
            flex: 1,
            paddingLeft: 25,
            paddingTop: 5,
            paddingBottom: 5,
            flexDirection: 'row',
            backgroundColor: '#697268'
        }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Loading...</Text>
        </View>
    );
};

class LessonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            appState: AppState.currentState,
            loading: true
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

    componentWillReceiveProps(){
        this.setState({loading: true});
    }

    componentDidMount() {
        if(this.props.routeName === 'exGrades') AppState.addEventListener('change', this._handleAppStateChange);
        if (env.debug && env.openFilter) this.props.navigation.navigate('filter');
    }

    componentWillUnmount() {
        if(this.props.routeName === 'exGrades') AppState.removeEventListener('change', this._handleAppStateChange);
        this.setState({loading: true});
    }

    _handleAppStateChange = (nextAppState) => {
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
            LocalStorage.loadRefreshGradesCond((error, refresh) => {
                if (error) {
                    Logger.error(error);
                    return;
                }

                if (refresh) {
                    this.props.navigation.navigate('exGrades');
                    this.setState({refreshing: true});
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

    onEndReached = () => {
        this.setState({loading: false});
    };

    onEndScroll= (nativeEvent) => {
        if(this.state.loading === true) return;

        this.props.handleFab(nativeEvent);
    };

    render() {
        // if (this.props.grades.length === 0) return <Text>Άδεια λίστα μαθημάτων</Text>;

        return (
            <FlatList
                style={{backgroundColor: 'white'}}
                keyExtractor={(item) => (item.id)}
                ListFooterComponent={<LoadingList loading={this.state.loading}/>}
                onEndReached={() => this.onEndReached()}
                onScroll={({nativeEvent}) => this.onEndScroll(nativeEvent)}
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
                    <ListItem onPress={this.openLesson(item)} style={{backgroundColor: 'white'}}>
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
