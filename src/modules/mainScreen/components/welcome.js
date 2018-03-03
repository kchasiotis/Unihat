import React from 'react';
import {Button, Text, Title, View} from "native-base";
import Settings from "../../settings/components/settings";
import {NavigationActions} from "react-navigation";

export default class Welcome extends React.Component {
    state = {switchValue: null, showModal: false};

    constructor(props) {
        super(props);
    }

    reset = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'screenNavigator'})
            ]
        });
        this.props.navigation.dispatch(resetAction)
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <View style={{paddingTop: 15, paddingBottom: 10}}>
                        <Title>Καλώς ορίσατε</Title>
                    </View>
                    <View style={{paddingTop: 0, paddingBottom: 20}}>
                        <Text style={{textAlign:'center',color: 'white'}}>Παρακάτω μπορείτε θέσετε ως ενεργή ή ανενεργή τη λειτουργία ενημερώσεων νέων βαθμολογιών. Καλά
                            αποτελέσματα!</Text>
                    </View>
                    <Settings/>
                </View>
                <Button style={{backgroundColor: '#009385'}} onPress={this.reset} full>
                    <Text>Τέλος</Text>
                </Button>
            </View>
        )
    }
}

const styles = {
    container: {
        backgroundColor: '#4947c4',
        flex: 1,

        paddingLeft: 20,
        paddingRight: 20
    }
};