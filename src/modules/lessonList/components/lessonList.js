import React, {Component} from 'react';
import {FlatList, RefreshControl, AppState} from 'react-native';
import {ListItem, Right, Text, Badge, Body, View} from 'native-base';

import {Crawler} from '../../../tools/crawler';
import {Logger} from '../../../tools/logger';
import {CredentialStorage, LocalStorage} from '../../../tools/localStorage';
import lesson from '../../lesson/components/lesson';
import env from '../../../../environment'

const LoadingList = ({loading, theme}) => {
    if (loading === false) return null;
    return (
        <View style={{
            flex: 1,
            paddingLeft: 25,
            paddingTop: 5,
            paddingBottom: 5,
            flexDirection: 'row',
            backgroundColor: theme.background
        }}>
            <Text style={{color: theme.textColor, fontWeight: 'bold'}}>Loading...</Text>
        </View>
    );
};

LoadingList.defaultProps = {
    theme: {
        background: '#697268',
        textColor: '#FFF'
    }
};

const EmptyList = ({theme}) => {
    return (
        <View style={{
            height: 500,
            backgroundColor: theme.background,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{fontWeight: 'bold', color: theme.textColor}}>Η λίστα είναι άδεια</Text>
        </View>
    );
};

EmptyList.defaultProps = {
    theme: {
        background: null,
        textColor: '#697268'
    }
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

    onEndScroll = (nativeEvent) => {
        if (this.state.loading === true) return;

        this.props.handleFab(nativeEvent);
    };

    render() {
        const {theme} = this.props;

        return (
            <FlatList
                style={{backgroundColor: theme.background}}
                keyExtractor={(item) => (item.id)}
                ListEmptyComponent={<EmptyList/>}
                ListFooterComponent={<LoadingList loading={this.state.loading && this.props.lessons.length > 10}/>}
                onEndReached={() => this.onEndReached()}
                onScroll={({nativeEvent}) => this.onEndScroll(nativeEvent)}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.refreshLessons}
                        title="Pull to refresh"
                        colors={['#3F51B5', 'green']}
                        progressBackgroundColor={'#FFF'}
                    />
                }
                data={this.props.lessons}
                renderItem={({item}) =>
                    <ListItem onPress={this.openLesson(item)} style={{backgroundColor: theme.background}}>
                        <Body>
                        <Text style={{color: theme.text}}>{item.title}</Text>
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

LessonList.defaultProps = {
    theme: {
        background: '#FFF',
        text: '#000',
    }
};

const style = {
    badgeStyle: (state, grade) => {
        if (state === 'Ακύρωση') {
            return '#000';
        }
        if (grade >= 5) return '#5CB85C';
        else return '#ED1727';
    }
};

export default LessonList;
