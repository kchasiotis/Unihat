import * as Keychain from 'react-native-keychain'

export default class CredentialStorage{
    static load(onLoad) {
        Keychain
            .getGenericPassword()
            .then(function (credentials) {
                onLoad(credentials.username, credentials.password);
            }.bind(this))
            .catch(function (error) {
                console.log('Load credentials failed! Maybe no value set?', error);
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
}