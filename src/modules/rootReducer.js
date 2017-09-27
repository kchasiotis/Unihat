import {combineReducers} from 'redux'
import {reducers as gradesReducers} from './login'
import {reducers as filterReducers} from './lessonList'

const rootReducer = combineReducers({
    grades: gradesReducers.grades,
    user: gradesReducers.user,
    filter: filterReducers.filter
});

export default rootReducer

