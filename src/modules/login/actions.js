export const SET_GRADES = 'SET_GRADES';

export const setGrades = (grades) => {
    return {
        type: SET_GRADES,
        grades: grades
    }
};