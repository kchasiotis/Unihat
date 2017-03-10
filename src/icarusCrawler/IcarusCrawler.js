let cheerio = require('cheerio-without-node-native');
let axios = require('axios');

let iconv = require('iconv-lite');
import {Buffer} from 'buffer';
global.Buffer = Buffer;

class User {
    username = null;
}

class Lesson {
    id = null;
    title = null;
    grade = null;
    semester = null;
    enrollDate = null;
    examDate = null;
    state = null;

    toString() {
        return this.id + ' ' + this.title + ' ' + this.grade + ' ' + this.semester + ' ' + this.enrollDate + ' ' + this.examDate + ' ' + this.state;
    }
}

export default class IcarusCrawler {
    constructor() {
        this.parseHtml = this.parseHtml.bind(this);
        this.fetchPage = this.fetchPage.bind(this);
    }

    parseHtml(data, onResponse) {
        // Initialize query mechanism
        let $ = cheerio.load(data, {
            decodeEntities: false
        });

        // Check if user logged in
        let loggedIn = $('#analytic_grades').length >= 1;
        if (!loggedIn) {
            onResponse(loggedIn);
            return;
        }

        // User data
        let user = new User();
        user.username = $('#header_login[style="display:inline"] > u').text();

        // Lessons data
        let parseAnalyticGrades = $('#analytic_grades > tbody').children();

        let analyticGrading = [];
        for (let i = 0; i < parseAnalyticGrades.length; i++) {
            let lesson = new Lesson();
            let temp = parseAnalyticGrades.eq(i).children();

            lesson.id = temp.eq(1).text().trim();
            lesson.title = temp.eq(2).text().trim();
            lesson.grade = temp.eq(3).text().trim();
            lesson.semester = temp.eq(4).text().trim();
            lesson.enrollDate = temp.eq(5).text().trim();
            lesson.examDate = temp.eq(6).text().trim();
            lesson.state = temp.eq(7).text().trim();

            analyticGrading.push(lesson);
        }
        onResponse(loggedIn, analyticGrading);
    }

    fetchPage(username, password, onResponse) {
        console.log('logging in');
        let parseHtml = this.parseHtml;

        // region Set up message
        let url = 'https://icarus-icsd.aegean.gr/authentication.php';

        let details = {
            username: username,
            pwd: password,
        };

        let formBody = [];

        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }

        formBody = formBody.join("&");
        // endregion

        axios({
            url: url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            responseType: 'arraybuffer',
            data: formBody
        }).then(function (response) {
            console.log('Page loaded');
            let data = iconv.decode(new Buffer(response.data), 'iso-8859-7');
            parseHtml(data, onResponse);
        });
    }

    logout() {
        console.log('Logging out');
        let url = 'https://icarus-icsd.aegean.gr/logout.php';

        axios({
            url: url,
            method: 'POST',
            responseType: 'arraybuffer'
        }).then(function (response) {
            console.log('Page loaded');
            let data = iconv.decode(new Buffer(response.data), 'iso-8859-7');
            if (response.status === 200)
                console.log('Successful logout')
        });
    }

}