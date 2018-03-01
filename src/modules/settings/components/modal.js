import React, {Component} from "react";
import {Text, Button, View} from "react-native";
import Modal from "react-native-modal";

export default class SettingsModal extends Component {
    state = {
        isModalVisible: true
    };

    _toggleModal = () =>
        this.setState({isModalVisible: !this.state.isModalVisible});

    render() {
        return (
            <Modal isVisible={this.state.isModalVisible}>
                <View style={styles.modal}>
                    <View style={styles.headerView}>
                        <Text style={styles.header}>Προσοχή!</Text>
                    </View>
                    <View style={{borderBottomColor: 'black', borderBottomWidth: 1}}/>
                    <View style={styles.textView}>
                        <Text style={styles.text}>Οι ενημερώσεις βρίσκονται σε πειραματικό στάδιο. Σε
                            περίπτωση σφαλμάτων απενεργοποιήστε τις από τις ρυθμίσεις.</Text>
                    </View>
                    <View>
                        <Button color={'black'} onPress={this._toggleModal} title={'OK'}/>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = {
    modal: {
        backgroundColor: 'white',
        height: 200
    },
    headerView: {
        paddingTop: 15,
        paddingBottom: 5,
        paddingLeft: 15,
    },
    textView: {
        paddingTop: 5,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'column',
        flex: 1
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15
    }
};