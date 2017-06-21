import React, {Component} from 'react';
import {ListItem, Right, Text, Badge, Body} from 'native-base';
import {FlatList, RefreshControl} from 'react-native';

import IcarusCrawler from '../../../tools/icarusCrawler/index';
import CredentialStorage from '../../../tools/credentialStorage';

class LessonList extends Component {
    constructor(props) {
        super(props);
        this.state = {refreshing: false};
        this.crawler = new IcarusCrawler();
        this.refreshLessons = this.refreshLessons.bind(this);
    }

    refreshLessons() {
        this.setState({refreshing: true});

        let onResponse = (loggedIn, allGrades) => {
            this.setState({refreshing: false});
            if(loggedIn) this.props.updateGrades(allGrades);
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
                refreshControl={
                    <RefreshControl
                        // refreshing={true}
                        refreshing={this.state.refreshing}
                        onRefresh={this.refreshLessons}
                        title="Pull to refresh"
                        colors={['#3F51B5','green']}
                        progressBackgroundColor='#fff'
                    />
                }
                data={this.props.grades}
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

export default LessonList;
