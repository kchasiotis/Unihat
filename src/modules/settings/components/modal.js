import React, {Component} from "react";
import {Text, View} from "react-native";
import Modal from "react-native-modal";
import {Button} from "native-base";

export default class SettingsModal extends Component {
    state = {
        isModalVisible: true
    };

    _toggleModal = () =>
        this.setState({isModalVisible: !this.state.isModalVisible});

    render() {
        return (
            <Modal isVisible={this.state.isModalVisible} onBackdropPress={() => this.setState({isModalVisible: false})}>
                <View style={styles.modal}>
                    <View style={styles.headerView}>
                        <Text style={styles.header}>Προσοχή</Text>
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.text}>Οι ενημερώσεις βρίσκονται σε πειραματικό στάδιο. Εαν εντοπίσετε
                            σφάλματα μπορείτε να τις απενεργοποιήσετε από τις ρυθμίσεις.</Text>
                    </View>
                    <View>
                        <Button color={'black'} onPress={this._toggleModal} bordered full><Text>OK</Text></Button>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = {
    modal: {
        backgroundColor: 'white'
    },
    headerView: {
        paddingTop: 10,
        paddingBottom: 5,
        paddingLeft: 15,
        backgroundColor: '#009385'
    },
    textView: {
        paddingTop: 5,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        flexDirection: 'column'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15
    }
};