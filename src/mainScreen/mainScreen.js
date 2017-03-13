import React, {Component} from 'react';
import {Container, Header, Left, Button, Body, Icon, Content, Title, Drawer} from 'native-base';
import LessonList from '../lessonList/lessonList'
import MenuContent from '../menu/MenuContent'

export default class MainScreen extends Component{
    constructor(props){
        super(props);
        this.state = {screenName: 'Icarus Aegean'};
    }

    closeDrawer = () => {
        this._drawer._root.close()
    };

    openDrawer = () => {
        this._drawer._root.open()
    };

    render(){
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={this.openDrawer}>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>{this.state.screenName}</Title>
                    </Body>
                </Header>

                <Drawer
                    type="displace"
                    openDrawerOffset={0.5}
                    panCloseMask={0.5}
                    ref={(ref) => { this._drawer = ref; }}
                    content={<MenuContent logout={this.props.logout}/>}
                    onClose={() => this.closeDrawer()}
                >
                    <Content>
                        <LessonList aGrades={this.props.allGrades.aGrades}/>
                    </Content>
                </Drawer>

            </Container>
        );

    }
}