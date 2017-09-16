import * as Keychain from 'react-native-keychain'
import {AsyncStorage} from 'react-native'

class CredentialStorage {
    static load(onLoad) {
        Keychain
            .getGenericPassword()
            .then(function (credentials) {
                onLoad(null, credentials.username, credentials.password);
            }.bind(this))
            .catch(function (error) {
                onLoad('Load credentials failed! Maybe no value set?' , error);
            }.bind(this));
    }

    static reset() {
        Keychain
            .resetGenericPassword()
            .then(function () {
                console.log('Credentials successfully deleted');
            })
            .catch(function (error) {
                console.log('Reset failed! Maybe no value set?', error);
            });
    }

    static set(username, password) {
        Keychain
            .setGenericPassword(username, password)
            .then(function () {
                console.log('Credentials saved successfully!');
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

    static loadGrades(onLoad) {
        AsyncStorage.getItem('grades', (err, storedGrades) => {
            onLoad(err, JSON.parse(storedGrades));
        });
    }

    static setGrades(grades) {
        AsyncStorage.setItem('grades', JSON.stringify(grades));
    }

    static loadRefreshGradesCond(onLoad) {
        AsyncStorage.getItem('refresh', (err, refresh) => {
            onLoad(err, JSON.parse(refresh));
        });
    }

    static setRefreshGradesCond(bool) {
        AsyncStorage.setItem('refresh', JSON.stringify(bool));
    }
}

export {CredentialStorage, LocalStorage}