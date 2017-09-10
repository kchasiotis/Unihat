import {AsyncStorage} from 'react-native'
import crawler from '../../tools/crawler'
import {lessonAPI} from '../../tools/api'
import CredentialStorage from '../../tools/credentialStorage'
import BackgroundJob from 'react-native-background-job';
import env from '../../../environment'

export const SET_GRADES = 'SET_GRADES';
export const SET_CURRENT_LESSON = 'SET_CURRENT_LESSON';
export const SET_LESSON_LIST = 'SET_LESSON_LIST';
export const SET_LOGIN_STATE = 'SET_LOGIN_STATE';
export const RESET_STATE = 'RESET_STATE';

export const LoginState = {
    INITIAL: 'INITIAL',
    LOADING: 'LOADING',
    LOGGED_IN: 'LOGGED_IN',
    FAILED: 'FAILED'
};

crawlerObj = new crawler();

export const setGrades = (grades) => {
    return {
        type: SET_GRADES,
        grades: grades
    }
};

export const setCurrentLesson = (lesson) => {
    return {
        type: SET_CURRENT_LESSON,
        currentLesson: lesson
    }
};

export const resetState = () => {
    return {
        type: RESET_STATE
    }
};

export const setLoginState = (state) => {
    return {
        type: SET_LOGIN_STATE,
        login_state: state
    }
};

export function getLessonStatistics(lesson) {

    return function (dispatch) {
        lessonAPI.getLessons(lesson.code, lesson.examDate, (res) => res.json().then((ls => {
            dispatch(setLessonList(ls))
        })));
    }
}

export function setLessonList(ls) {
    return {
        type: SET_LESSON_LIST,
        lessonList: ls
    }
}

export function login(username, password, chkBox) {

    return function (dispatch) {
        let onResponse = (loggedIn, grades) => {
            if (loggedIn === true) {
                dispatch(setLoginState(LoginState.LOGGED_IN));
                dispatch(setGrades(grades));
                dispatch(postLessonsCheck(username, grades.aGrades.concat(grades.exGrades)));
                AsyncStorage.setItem('grades', JSON.stringify(grades));
                AsyncStorage.setItem('refresh', JSON.stringify({shouldRefresh: false}));

                let newGradeCheckSchedule = {
                    jobKey: "newGradeCheck",
                    timeout: env.debug === true ? 10000 : 3600000,
                    period: 5000,
                    override: true,
                    networkType: BackgroundJob.NETWORK_TYPE_ANY
                };
                BackgroundJob.schedule(newGradeCheckSchedule);

                if (chkBox === true) CredentialStorage.set(username, password);
            } else if (loggedIn === false) {
                dispatch(setLoginState(LoginState.FAILED));
            }
        };

        dispatch(setLoginState(LoginState.LOADING));

        if (env.debug === false) {
            crawlerObj.fetchPage(username, password, onResponse);
        } else {
            crawlerObj.fetchMockPage(username, onResponse);
        }
    }
}

export function postLessonsCheck(username, lessons) {

    return function (dispatch) {
        let onResponse = (res) => {
            res.json().then((resJs) => {
                if (resJs.lessonsNumber !== lessons.length) dispatch(postLessons({
                    lessons: lessons,
                    username: username
                }));
                else console.log('Lessons already uploaded')
            })
        };

        lessonAPI.getUserLessonsNumber(username, onResponse)
    }
}

export function postLessons(lessons) {

    return function (dispatch) {
        let onResponse = (res) => {
            res.json().then((resJs) => {
                console.log('Sent ' + resJs.insertedNumber)
            })
        };

        lessonAPI.postLessons(lessons, onResponse)
    }
}