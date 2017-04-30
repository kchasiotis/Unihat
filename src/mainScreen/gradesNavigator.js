import React, {Component} from 'react'
import {} from 'react-native'
import InitializeLessonList from '../lessonList/lessonList'
import ChartScreen from '../chartScreen/index'
import {StackNavigator} from 'react-navigation';
import {Icon} from "native-base";

function MenuIcon(props) {
    return (
        <Icon name="menu" style={{paddingLeft: 15, color: 'white'}}
              onPress={() => props.navigation.navigate('DrawerOpen')}/>
    );
}

export default class GradesNavigator extends Component {
    constructor(props){
        super(props);

        this.state = {allGrades: this.props.allGrades};
    }

    render(){
        ChartScreen.defaultProps = {allGrades: this.state.allGrades};

        let aGrades = InitializeLessonList(this.state.allGrades.aGrades);
        let exGrades = InitializeLessonList(this.state.allGrades.exGrades);

        const GradesNav = StackNavigator({
            aGrades: {screen: aGrades},
            exGrades: {screen: exGrades},
            chartScreen: {screen: ChartScreen},
        }, {
            navigationOptions: {
                headerTitle: 'Βαθμοί',
                headerLeft: <MenuIcon navigation={this.props.navigation}/>,
                headerStyle: {backgroundColor: '#3F51B5'},
                headerTitleStyle: {color: 'white'},
            },
        });

        return <GradesNav/>;
    }
}