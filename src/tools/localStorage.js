import * as Keychain from 'react-native-keychain'
import {AsyncStorage} from 'react-native'
// todo: remove logger
import {Logger} from './logger';

class CredentialStorage {
    static load(onLoad) {
        Keychain
            .getGenericPassword()
            .then(function (credentials) {
                onLoad(null, credentials.username, credentials.password);
            }.bind(this))
            .catch(function (error) {
                onLoad('Load credentials failed! Maybe no value set? ' + error);
            }.bind(this));
    }

    static reset() {
        Keychain
            .resetGenericPassword()
            .then(function () {
                Logger.info('Credentials successfully deleted');
            })
            .catch(function (error) {
                Logger.warn('Reset failed! Maybe no value set?', error);
            });
    }

    static set(username, password) {
        Keychain
            .setGenericPassword(username, password)
            .then(function () {
                Logger.info('Credentials saved successfully!');
            });
    }
}

class LocalStorage {
    static loadCredentialCheckbox(onLoad) {
        AsyncStorage.getItem('credentialCheckBox', (err, result) => {
            onLoad(err, JSON.parse(result));
        });
    }

    static setCredentialCheckbox(state) {
        AsyncStorage.setItem('credentialCheckBox', JSON.stringify(state));
    }

    static loadLessonsLists(onLoad) {
        AsyncStorage.getItem('LessonsLists', (err, storedGrades) => {
            onLoad(err, JSON.parse(storedGrades));
        });
    }

    static setFirstRun(flag) {
        AsyncStorage.setItem('FirstRun', JSON.stringify(flag));
    }

    static loadFirstRun(onLoad) {
        AsyncStorage.getItem('FirstRun', (err, flag) => {
            onLoad(err, JSON.parse(flag));
        });
    }

    static setLessonsLists(LessonsLists) {
        AsyncStorage.setItem('LessonsLists', JSON.stringify(LessonsLists));
    }

    static loadSettings(onLoad) {
        AsyncStorage.getItem('Settings', (err, settings) => {
            onLoad(err, JSON.parse(settings));
        });
    }

    static setSettings(settings) {
        AsyncStorage.setItem('Settings', JSON.stringify(settings));
    }

    static loadRefreshGradesCond(onLoad) {
        AsyncStorage.getItem('refresh', (err, refresh) => {
            onLoad(err, JSON.parse(refresh));
        });
    }

    static setRefreshLessonsListsCond(bool) {
        AsyncStorage.setItem('refresh', JSON.stringify(bool));
    }
}

export {CredentialStorage, LocalStorage}