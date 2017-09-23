import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {MainNavigator} from './src/modules/mainScreen'

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import AppReducer from './src/modules/rootReducer';

import BackgroundJob from 'react-native-background-job';
import {newGradeCheckJob, jobNames} from './src/tools/backgroundJob';

const store = createStore(AppReducer, applyMiddleware(
    thunkMiddleware
));

const {mobile, wifi} = jobNames.newGradeCheck;
BackgroundJob.register(newGradeCheckJob(mobile));
BackgroundJob.register(newGradeCheckJob(wifi));

class Unihat extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainNavigator/>
            </Provider>
        )
    }
}

AppRegistry.registerComponent('Unihat', () => Unihat);
