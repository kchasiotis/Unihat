import {combineReducers} from 'redux'
import {reducers as gradesReducers} from './login'
import {reducers as filterReducers} from './lessonList'

const rootReducer = combineReducers({
    user: gradesReducers.user,
    filter: filterReducers.filter,
    appState: gradesReducers.appState,
});

export default rootReducer

