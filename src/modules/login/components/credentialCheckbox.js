import React, {Component} from 'react'
import {AsyncStorage} from 'react-native'
import CredentialStorage from '../../../tools/credentialStorage'

import {ListItem, CheckBox, Text} from 'native-base'

export default class CredentialCheckbox extends Component {
    constructor(props) {
        super(props);

        this.state = {credentialCheckBox: false};

        this.loadCredentials = this.loadCredentials.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);

        this.loadCredentials(this.props.onLoad);

        AsyncStorage.getItem('credentialCheckBox', (err, result) => {
            if (result === null || err) return;

            let toBoolean = result === 'true';
            this.setState({credentialCheckBox: toBoolean});
            this.props.handleCheckbox(toBoolean);

            // Load user credentials
            if (toBoolean === false) {
                // Reset checkbox value
                CredentialStorage.reset();
            }
        })
    }

    loadCredentials(onLoad) {
        CredentialStorage.load(onLoad);
    }

    handleCheckbox() {
        let value = !this.state.credentialCheckBox;
        this.setState({credentialCheckBox: value});
        this.props.handleCheckbox(value);
        AsyncStorage.setItem('credentialCheckBox', JSON.stringify(value));
    }

    render() {
        return (
            <ListItem>
                <CheckBox onPress={this.handleCheckbox} checked={this.state.credentialCheckBox}/>
                <Text> Αποθήκευση στοιχείων</Text>
            </ListItem>
        );
    }
}