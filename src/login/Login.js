import React, {Component} from 'react';
import View from 'react-native';
import {Content, Item, Input, Text} from 'native-base';
import IcarusCrawler from '../icarusCrawler/IcarusCrawler'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {resp: 'nothing'};
        this.onLoad = this.onLoad.bind(this);

        IcarusCrawler.fetchPage(this.onLoad);
    }

    onLoad(val){
        this.setState({resp: val});
    }

    render() {
        return (
            <Content>
                <Item regular>
                    <Input placeholder={this.state.resp}/>
                </Item>
                <Item regular>
                    <Input placeholder='Regular Textbox'/>
                </Item>
            </Content>
        );
    }
}