import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {MainNavigator} from './src/modules/mainScreen'

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import AppReducer from './src/modules/rootReducer';

const store = createStore(AppReducer);

export default class IcarusAegean extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainNavigator />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('IcarusAegean', () => IcarusAegean);
