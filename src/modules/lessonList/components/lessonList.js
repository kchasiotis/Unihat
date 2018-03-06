import React from 'react';
import {FlatList, RefreshControl, AppState, Image, SectionList} from 'react-native';
import {ListItem, Right, Text, Badge, Body, View} from 'native-base';

import {Crawler} from '../../../tools/crawler';
import {Logger} from '../../../tools/logger';
import {CredentialStorage, LocalStorage} from '../../../tools/localStorage';
import lesson from '../../lesson/components/lesson';
import env from '../../../../environment'
import {lessonStateColor} from '../../../tools/colors'

const LoadingList = ({loading}) => {
    if (loading === false) {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center', height: 90}}>
                <Image style={{width: 50, height: 50}} source={require('../../../../resources/icon.png')}/>
            </View>);
    }

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

const EmptyList = () => {
    return (
        <View style={{height: 500, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold', color: '#697268'}}>Η λίστα είναι άδεια</Text>
        </View>
    );
};

class LessonList extends React.Component {
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
                // todo: (UI) add error message
                Logger.error(error);
            }
            this.setState({refreshing: false});
            if (!error && loggedIn) this.props.updateLessonsLists(allGrades);
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
            this.props.navigation.navigate('lesson', lesson);
        }
    }

    componentWillReceiveProps() {
        this.setState({loading: true});
    }

    componentDidMount() {
        if (this.props.routeName === 'exGrades') AppState.addEventListener('change', this._handleAppStateChange);
        if (env.debug && env.openFilter) this.props.navigation.navigate('filter');
    }

    componentWillUnmount() {
        if (this.props.routeName === 'exGrades') AppState.removeEventListener('change', this._handleAppStateChange);
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
                    LocalStorage.loadLessonsLists((err, lessons) => {
                        this.props.updateLessonsLists(lessons);
                        this.setState({refreshing: false});
                        LocalStorage.setRefreshLessonsListsCond(false);
                    });
                }
            })
        }
        this.setState({appState: nextAppState});
    };

    onEndReached = () => {
        this.setState({loading: false});
    };

    render() {
        if (this.props.routeName === 'aGrades')
            return (
                <SectionList
                    style={{backgroundColor: 'white'}}
                    keyExtractor={(item) => (item.id)}
                    ListEmptyComponent={<EmptyList/>}
                    ListFooterComponent={<LoadingList loading={this.state.loading && this.props.lessons.length > 10}/>}
                    onEndReached={() => this.onEndReached()}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.refreshLessons}
                            title="Pull to refresh"
                            colors={['#3F51B5', 'green']}
                            progressBackgroundColor='#fff'
                        />
                    }
                    sections={this.props.lessons}
                    renderSectionHeader={({section}) => <View><Text style={{
                        paddingLeft: 10,
                        backgroundColor: '#697268',
                        color: 'white'
                    }}>{section.title}</Text></View>}
                    renderItem={({item}) =>
                        <ListItem onPress={this.openLesson(item)} style={{backgroundColor: 'white'}}>
                            <Body>
                            <Text>{item.title}</Text>
                            </Body>
                            <Right>
                                {
                                    item.grade !== null ?
                                        <Badge style={{backgroundColor: lessonStateColor(item.state)}}>
                                            <Text>{item.grade}</Text>
                                        </Badge> :
                                        null
                                }
                            </Right>
                        </ListItem>
                    }
                />
            );
        else {
            return (
                <FlatList
                    style={{backgroundColor: 'white'}}
                    keyExtractor={(item) => (item.id)}
                    ListEmptyComponent={<EmptyList/>}
                    ListFooterComponent={<LoadingList loading={this.state.loading && this.props.lessons.length > 10}/>}
                    onEndReached={() => this.onEndReached()}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.refreshLessons}
                            title="Pull to refresh"
                            colors={['#3F51B5', 'green']}
                            progressBackgroundColor='#fff'
                        />
                    }
                    data={this.props.lessons}
                    renderItem={({item}) =>
                        <ListItem onPress={this.openLesson(item)} style={{backgroundColor: 'white'}}>
                            <Body>
                            <Text>{item.title}</Text>
                            </Body>
                            <Right>
                                {
                                    item.grade !== null ?
                                        <Badge style={{backgroundColor: lessonStateColor(item.state)}}>
                                            <Text>{item.grade}</Text>
                                        </Badge> :
                                        null
                                }
                            </Right>
                        </ListItem>
                    }
                />
            )
        }
    }
}

export default LessonList;
