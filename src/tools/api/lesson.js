import fetch from 'isomorphic-fetch'

let url = 'http://localhost:3000/lesson';

const getLessons = function (code, enrollDate, onResponse) {
    // region Set up url params
    let params = {
        code: code,
        enrollDate: enrollDate
    };

    let esc = encodeURIComponent;
    let query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
    // endregion

    fetch(url + '?' + query, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((responseJson) => {
            onResponse(responseJson);
        })
        .catch((error) => {
            console.error(error);
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
            console.error(error);
        });
};

export {getLessons, postLessons};