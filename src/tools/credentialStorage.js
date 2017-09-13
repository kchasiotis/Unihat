import * as Keychain from 'react-native-keychain'

export default class CredentialStorage{
    static load(onLoad) {
        Keychain
            .getGenericPassword()
            .then(function (credentials) {
                onLoad(null, credentials.username, credentials.password);
            }.bind(this))
            .catch(function (error) {
                onLoad(error);
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

    static set(username, password){
        Keychain
            .setGenericPassword(username, password)
            .then(function() {
                console.log('Credentials saved successfully!');
            });
    }
}