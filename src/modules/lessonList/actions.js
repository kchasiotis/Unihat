export const SORT_BY = 'SORT_BY';
export const SORT_ORDER = 'SORT_ORDER';
export const FILTER_BY_STATE = 'FILTER_BY_STATE';
export const FILTER_GRADE_RANGE = 'FILTER_GRADE_RANGE';

export const filterSortConfig = {
    by: {enrollDate: 'enrollDate', semester: 'semester', grade: 'grade'},
    order: {asc: 'asc', desc: 'desc'}
};

export const sortBy = (filter) => {
    return {
        type: SORT_BY,
        sortBy: filter
    }
};

export const sortOrder = (filter) => {
    return {
        type: SORT_ORDER,
        sortOrder: filter
    }
};

export const filterByState = (filter) => {
    return {
        type: FILTER_BY_STATE,
        filterByState: filter
    }
};

export const filterGradeRange = (filter) => {
    return {
        type: FILTER_GRADE_RANGE,
        filterGradeRange: filter
    }
};