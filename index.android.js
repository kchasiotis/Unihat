import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {MainNavigator} from './src/modules/mainScreen'

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'

import AppReducer from './src/modules/rootReducer';

const store = createStore(AppReducer, applyMiddleware(
    thunkMiddleware
));

import BackgroundJob from 'react-native-background-job';

const backgroundJob = {
    jobKey: "myJob",
    job: () => {
        while (true) {
            setTimeout(() => console.log("Running in background"), 500)
        }
    }
};

BackgroundJob.register(backgroundJob);

var backgroundSchedule = {
    jobKey: "myJob",
    timeout: 5000,
    alwaysRunning: true,
    notificationTitle:'Hello'
}

// BackgroundJob.getAll()
BackgroundJob.schedule(backgroundSchedule);

export default class IcarusAegean extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainNavigator/>
            </Provider>
        )
    }
}

AppRegistry.registerComponent('IcarusAegean', () => IcarusAegean);
