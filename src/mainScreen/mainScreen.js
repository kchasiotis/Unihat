import React, {Component} from 'react';
import LessonList from '../lessonList/lessonList'

export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {screenName: 'Icarus Aegean', menuItem: 0};
    }

    setMenuItem(choice) {
        this.setState({menuItem: choice});
    }

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
            <LessonList grades={grades}/>
        );

    }
}