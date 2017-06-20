// React imports
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {MainNavigator} from './src/modules/mainScreen'

export default class IcarusAegean extends Component {
    render() {
        return <MainNavigator/>;
    }
}

AppRegistry.registerComponent('IcarusAegean', () => IcarusAegean);
