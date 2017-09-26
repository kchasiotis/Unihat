import crawler from '../../tools/crawler'
import {lessonAPI} from '../../tools/api'
import {CredentialStorage, LocalStorage} from '../../tools/localStorage';
import BackgroundJob from 'react-native-background-job';
import {jobNames} from '../../tools/backgroundJob'
import {Logger} from '../../tools/logger';
import env from '../../../environment'

export const SET_GRADES = 'SET_GRADES';
export const SET_CURRENT_LESSON = 'SET_CURRENT_LESSON';
export const SET_LESSON_LIST = 'SET_LESSON_LIST';
export const SET_LOGIN_STATE = 'SET_LOGIN_STATE';
export const RESET_STATE = 'RESET_STATE';

export const LoginState = {
    INITIAL: 'INITIAL',
    LOADED_CREDENTIALS: 'LOADED_CREDENTIALS',
    LOADING: 'LOADING',
    LOGGED_IN: 'LOGGED_IN',
    LOGGED_OUT: 'LOGGED_OUT',
    FAILED: 'FAILED',
    NETWORK_ERROR: 'NETWORK_ERROR'
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
        let onResponse = (error, loggedIn, grades) => {
            if(error) {
                if(error.status === 501) {
                    dispatch(setLoginState(LoginState.FAILED));
                    Logger.warn(error.status + ' wrong username');
                }
                else if(error.request) dispatch(setLoginState(LoginState.NETWORK_ERROR));
                Logger.warn(error);
                return;
            }

            if (loggedIn === true) {
                dispatch(setLoginState(LoginState.LOGGED_IN));
                dispatch(setGrades(grades));
                dispatch(postLessonsCheck(username, grades.aGrades.concat(grades.exGrades)));
                LocalStorage.setGrades(grades);
                LocalStorage.setRefreshGradesCond(false);

                let newGradeCheckScheduleWifi = {
                    jobKey: jobNames.newGradeCheck.wifi,
                    timeout: 15000,
                    period: 60 * 60 * 1000,
                    override: true,
                    networkType: BackgroundJob.NETWORK_TYPE_UNMETERED
                };

                // todo: change networkType to mobile
                let newGradeCheckScheduleMobile = {
                    jobKey: jobNames.newGradeCheck.mobile,
                    timeout: 15000,
                    period: env.debug && env.shortSchedule ? 5 * 1000 : 12 * 60 * 60 * 1000,
                    override: true,
                    networkType: BackgroundJob.NETWORK_TYPE_ANY
                };
                BackgroundJob.schedule(newGradeCheckScheduleWifi);
                BackgroundJob.schedule(newGradeCheckScheduleMobile);

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
                else Logger.info('Lessons already uploaded')
            })
        };

        lessonAPI.getUserLessonsNumber(username, onResponse)
    }
}

export function postLessons(lessons) {

    return function (dispatch) {
        let onResponse = (res) => {
            res.json().then((resJs) => {
                Logger.log('Sent ' + resJs.insertedNumber)
            })
        };

        lessonAPI.postLessons(lessons, onResponse)
    }
}