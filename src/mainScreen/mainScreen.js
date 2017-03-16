import React, {Component} from 'react';
import LessonList from '../lessonList/lessonList'
import {Container, Header, Left, Button, Body, Icon, Content, Title, Drawer} from 'native-base';
import MenuContent from '../menu/MenuContent'

export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {screenName: 'Icarus Aegean', menuItem: 0};

        this.setMenuItem = this.setMenuItem.bind(this);
    }

    setMenuItem(choice) {
        this.setState({menuItem: choice});
    }

    closeDrawer = () => {
        this._drawer._root.close()
    };

    openDrawer = () => {
        this._drawer._root.open()
    };

    render() {
        let grades;
        switch (this.state.menuItem) {
            case 0:
                grades = this.props.allGrades.aGrades;
                break;
            case 1:
                grades = this.props.allGrades.sGrades;
                break;
            case 2:
                grades = this.props.allGrades.exGrades;
                break;
            case 3:
                grades = this.props.allGrades.emGrades;
                break;
        }

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
                type="overlay"
                openDrawerOffset={0.4}
                panCloseMask={0.4}
                ref={(ref) => { this._drawer = ref; }}
                content={<MenuContent closeMenu={this.closeDrawer} setMenuItem={this.setMenuItem} logout={this.props.logout}/>}
                onClose={() => this.closeDrawer()}
            >
                <Content>
                    <LessonList grades={grades}/>
                </Content>
            </Drawer>

        </Container>
        );

    }
}