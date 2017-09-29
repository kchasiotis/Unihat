import {LessonListWrapper} from '../../lessonList'
import {ChartScreen} from '../../chartScreen'
import {TabNavigator} from 'react-navigation';
import env from '../../../../environment'

export default function LessonsTabNav() {
    let initRoute = env.debug ? env.drawerRoute : null;

    return TabNavigator({
            aGrades: {
                screen: LessonListWrapper,
                navigationOptions: {title: 'Όλα '}
            },
            exGrades: {
                screen: LessonListWrapper,
                navigationOptions: {title: 'Εξεταστική '}
            },
            ChartScreen: {
                screen: ChartScreen,
                navigationOptions: {title: 'Γραφήματα '}
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
                    backgroundColor: '#f86624'
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