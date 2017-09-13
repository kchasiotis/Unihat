let url = 'http://192.168.1.9:3000/lesson';

const getLessons = function (code, examDate, onResponse) {
    // region Set up url params
    let params = {
        code: code,
        examDate: examDate
    };

    let esc = encodeURIComponent;
    let query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
    // endregion

    fetch(url + '?' + query, {
        method: 'GET'
    })
        .then((response) => {
            onResponse(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

const getUserLessonsNumber = function (user, onResponse) {
    fetch(url + '/' + user, {
        method: 'GET'
    })
        .then((response) => {
            onResponse(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

const postLessons = function (lessons, onResponse) {

    fetch(url + '/save', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(lessons)
    })
        .then((response) => {
            onResponse(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

const lessonAPI = {getLessons, postLessons, getUserLessonsNumber};

export {lessonAPI};