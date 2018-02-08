import {Crawler} from '../../tools/crawler'
import {lessonAPI} from '../../tools/api'

import BackgroundJob from 'react-native-background-job';
import {jobNames} from '../../tools/backgroundJob'

import {CredentialStorage, LocalStorage} from '../../tools/localStorage';
import {Logger} from '../../tools/logger';
import env from '../../../environment'

import * as actionTypes from "./actionTypes";
import {LESSON_STATES_ICSD, LESSON_STATES_SEF} from "../../tools/crawler";
import {actions} from "../lessonList";

crawlerObj = new Crawler();

export const setUser = (user) => {
    return {
        type: actionTypes.SET_USER,
        user: user
    }
};

export const resetState = () => {
    return {
        type: actionTypes.RESET_STATE
    }
};

export const setLoginState = (state) => {
    return {
        type: actionTypes.SET_LOGIN_STATE,
        login_state: state
    }
};

export function login(username, password, chkBox) {
    const {LoginState} = actionTypes;

    return function (dispatch) {
        let onResponse = (error, loggedIn, lessonsLists) => {
            if (error) {
                if (error.status === 501) {
                    dispatch(setLoginState(LoginState.FAILED));
                    Logger.warn(error.status + ' wrong username');
                }
                else if (error.request) dispatch(setLoginState(LoginState.NETWORK_ERROR));
                Logger.warn(error);
                return;
            }

            if (loggedIn === true) {
                dispatch(setLoginState(LoginState.LOGGED_IN));
                dispatch(setUser({username: username}));
                dispatch(actions.setLessonStates(username.includes('icsd') ? LESSON_STATES_ICSD : LESSON_STATES_SEF));
                dispatch(actions.setLessons(lessonsLists));
                dispatch(postLessonsCheck(username, lessonsLists.aGrades.concat(lessonsLists.exGrades)));
                LocalStorage.setLessonsLists(lessonsLists);
                LocalStorage.setRefreshLessonsListsCond(false);

                if (env.backgroundCheck) {
                    let newGradeCheckScheduleWifi = {
                        jobKey: jobNames.newGradeCheck.wifi,
                        timeout: 15000,
                        period: 60 * 60 * 1000,
                        override: true,
                        networkType: BackgroundJob.NETWORK_TYPE_UNMETERED
                    };

                    // todo: (priority 2) change networkType to mobile
                    let newGradeCheckScheduleMobile = {
                        jobKey: jobNames.newGradeCheck.mobile,
                        timeout: 15000,
                        period: env.debug && env.shortSchedule ? 5 * 1000 : 12 * 60 * 60 * 1000,
                        override: true,
                        networkType: BackgroundJob.NETWORK_TYPE_ANY
                    };
                    BackgroundJob.schedule(newGradeCheckScheduleWifi);
                    BackgroundJob.schedule(newGradeCheckScheduleMobile);
                }

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
        let onResponse = (error, res) => {
            if (error) {
                Logger.warn(error.message);
                return;
            }

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
    return function () {
        let onResponse = (error, res) => {
            if (error) {
                Logger.warn(error.message);
                return;
            }

            res.json().then((resJs) => {
                Logger.log('Sent ' + resJs.insertedNumber)
            })
        };

        lessonAPI.postLessons(lessons, onResponse)
    }
}