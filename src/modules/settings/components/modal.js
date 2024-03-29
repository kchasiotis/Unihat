import React, {Component} from "react";
import Modal from "react-native-modal";
import {Button, Text, View} from "native-base";

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
                        <Button warning onPress={this._toggleModal} bordered full><Text style={{color:'#f86624'}}>OK</Text></Button>
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
        backgroundColor: '#f86624'
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