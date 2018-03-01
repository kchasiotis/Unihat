import React from 'react'
import {List, ListItem, Left, Icon, Body, Right, Text, Switch, Button, View} from "native-base";
import SettingsModal from "./modal";
import {NavigationActions} from "react-navigation";

export default class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {switchValue: false};
        this.reset = this.reset.bind(this);
    }

    reset(){
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'screenNavigator'})
            ]
        });
        this.props.navigation.dispatch(resetAction)
    }

    render() {
        const {switchValue} = this.state;

        return (
            <View style={{flex: 1}}>
                {switchValue && <SettingsModal/>}
                <List>
                    <ListItem icon>
                        <Left>
                            <Icon name="notifications"/>
                        </Left>
                        <Body>
                        <Text>Ενημερώσεις</Text>
                        </Body>
                        <Right>
                            <Switch onValueChange={() => this.setState({switchValue: !switchValue})} value={switchValue}/>
                        </Right>
                    </ListItem>
                </List>
                {
                    true &&
                    (<View style={{flex: 1, justifyContent: 'flex-end'}}>
                        <Button style={{backgroundColor:'#f86624'}} onPress={this.reset} full>
                            <Text>Τέλος</Text>
                        </Button>
                    </View>)
                }
            </View>
        )
    }
}