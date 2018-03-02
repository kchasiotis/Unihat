import React from 'react'
import {List, ListItem, Left, Icon, Body, Right, Text, Switch, Button, View} from "native-base";
import SettingsModal from "./modal";
import {NavigationActions} from "react-navigation";
import {LocalStorage} from "../../../tools/localStorage";
import {Logger} from "../../../tools/logger";
import Scheduler from "../../../tools/backgroundJob/scheduler";

export default class Settings extends React.Component {
    state = {switchValue: null, showModal: false};

    constructor(props) {
        super(props);
        let self = this;

        LocalStorage.loadSettings((err, res) => {
            if (err) {
                self.state = {switchValue: false};
                Logger.warn(err);
            }
            if (res === null) {
                self.setState({switchValue: false});
                return;
            }

            self.setState({switchValue: res.backgroundCheck});
        })
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

    onValueChange = () => {
        const {switchValue} = this.state;
        let newValue = !switchValue;

        this.setState({switchValue: newValue, showModal: newValue});

        if (newValue === true) Scheduler.run();
        else Scheduler.cancelAll();
        LocalStorage.setSettings({backgroundCheck: newValue});
    };

    render() {
        const {switchValue, showModal} = this.state;
        if (switchValue === null) return null;

        return (
            <View style={{flex: 1}}>
                {showModal && <SettingsModal/>}
                <List>
                    <ListItem icon>
                        <Left>
                            <Icon name="notifications"/>
                        </Left>
                        <Body>
                        <Text>Ενημερώσεις</Text>
                        </Body>
                        <Right>
                            <Switch onValueChange={this.onValueChange} value={switchValue}/>
                        </Right>
                    </ListItem>
                </List>
                {
                    true &&
                    (<View style={{flex: 1, justifyContent: 'flex-end'}}>
                        <Button style={{backgroundColor: '#f86624'}} onPress={this.reset} full>
                            <Text>Τέλος</Text>
                        </Button>
                    </View>)
                }
            </View>
        )
    }
}