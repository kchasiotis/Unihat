import {InitializeLessonList} from '../../lessonList'
import {ChartScreen} from '../../chartScreen'
import {TabNavigator} from 'react-navigation';
import env from '../../../../environment'

export default function LessonsTabNav() {
    let aGrades = InitializeLessonList();
    let exGrades = InitializeLessonList();

    let initRoute = env.debug ? env.drawerRoute : null;

    return TabNavigator({
            aGrades: {
                screen: aGrades,
                navigationOptions: {title: 'Όλα'}
            },
            exGrades: {
                screen: exGrades,
                navigationOptions: {title: 'Εξεταστική'}
            },
            ChartScreen: {
                screen: ChartScreen,
                navigationOptions: {title: 'Γραφήματα'}
            },
        }, {
            initialRouteName: initRoute,
            animationEnabled: false,
            swipeEnabled: true,
            backBehavior: 'none',
            tabBarOptions: {
                inactiveTintColor: 'white',
                upperCaseLabel: false,
                indicatorStyle: {
                    backgroundColor: 'white'
                },
                labelStyle: {
                    fontWeight: 'bold',
                },
                style: {
                    backgroundColor: '#3F51B5',
                }
            },
            tabBarPosition: 'bottom'
        }
    );
}