// React imports
import React, {Component} from 'react';
import {
    AppRegistry
} from 'react-native';

// UI componets imports
import {Container, Header, Left, Button, Body, Icon, Content, Title, Drawer} from 'native-base';
import MainScreen from './src/mainScreen/mainScreen'
import Login from './src/login/Login'
import IcarusCrawler from './src/icarusCrawler/IcarusCrawler'
import MenuContent from './src/menu/MenuContent'

export default class IcarusAegean extends Component {
    constructor(props) {
        super(props);
        this.state = {logged: false, allGrades: null};

        this.setMenuItem = this.setMenuItem.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.logout = this.logout.bind(this);
    }

    onLogin(state, allGrades) {
        if (allGrades) {
            this.setState({allGrades: allGrades});
        }
        this.setState({logged: state});
        console.log(state ? 'Logged in' : 'Log in failed');
    }

    logout(){
        new IcarusCrawler().logout();
        this.setState({logged: false});
    }

    closeDrawer = () => {
        this._drawer._root.close()
    };

    openDrawer = () => {
        this._drawer._root.open()
    };

    setMenuItem(choice) {
        this.refs.mainScreen.setMenuItem(choice)
    }

    render() {
        if (this.state.logged) {
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
                        content={<MenuContent closeMenu={this.closeDrawer} setMenuItem={this.setMenuItem} logout={this.logout}/>}
                        onClose={() => this.closeDrawer()}
                    >
                        <Content>
                            <MainScreen ref="mainScreen" logout={this.logout} allGrades={this.state.allGrades}/>
                        </Content>
                    </Drawer>

                </Container>
            );
        }

        return (
            <Login ref="LoginComponent" onLogin={this.onLogin}/>
        );
    }
}

AppRegistry.registerComponent('IcarusAegean', () => IcarusAegean);
