import crawler from '../../tools/crawler'
import * as Keychain from 'react-native-keychain'
import env from '../../../environment'

export const SET_GRADES = 'SET_GRADES';
export const SET_CURRENT_LESSON = 'SET_CURRENT_LESSON';
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

export function login(username, password, save) {

    return function (dispatch) {
        let onResponse = (loggedIn, grades) => {
            if (loggedIn === true) {
                dispatch(setLoginState(LoginState.LOGGED_IN));
                dispatch(setGrades(grades));
                if (save === true) {
                    Keychain
                        .setGenericPassword(username, password)
                        .then(function () {
                            console.log('Credentials saved successfully!');
                        });
                }
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