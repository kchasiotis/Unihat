import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {MainNavigator} from './src/modules/mainScreen'

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import AppReducer from './src/modules/rootReducer';

import BackgroundJob from 'react-native-background-job';
import {job} from './src/tools/backgroundJob';

const store = createStore(AppReducer, applyMiddleware(
    thunkMiddleware
));

BackgroundJob.register(job);

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
