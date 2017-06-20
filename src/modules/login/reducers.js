import {SET_GRADES} from './actions'

function grades(state={}, action){
    switch (action.type){
        case SET_GRADES:
            return Object.assign({}, action.grades);
        default:
            return state;
    }
}

export {grades};