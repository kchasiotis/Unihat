import {combineReducers} from 'redux'
import {reducers as gradesReducers} from './login'

const rootReducer = combineReducers({
    grades: gradesReducers.grades,
    appState: gradesReducers.appState,
    user: gradesReducers.user
});

export default rootReducer

