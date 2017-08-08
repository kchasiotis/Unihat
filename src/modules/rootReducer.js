import {combineReducers} from 'redux'
import {reducers as gradesReducers} from './login'

const rootReducer = combineReducers({
    grades: gradesReducers.grades,
    user: gradesReducers.user
});

export default rootReducer

