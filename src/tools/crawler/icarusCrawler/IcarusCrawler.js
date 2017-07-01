let cheerio = require('cheerio-without-node-native');
let axios = require('axios');

let iconv = require('iconv-lite');
import {Buffer} from 'buffer';
import htmlDataClosed from './mockExamsClosed';
import htmlDataOpen from './mockExamsOpen';
import env from '../../../../environment'
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
    label = null;

    toString() {
        return this.id + ' ' + this.title + ' ' + this.grade + ' ' + this.semester + ' ' + this.enrollDate + ' ' + this.examDate + ' ' + this.state + ' ' + this.label;
    }
}

export default class IcarusCrawler {
    constructor() {
        this.parseHtml = this.parseHtml.bind(this);
        this.fetchPage = this.fetchPage.bind(this);
        this.parseGrades = this.parseGrades.bind(this);
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

        // Analytic grades tBody
        let abody = $('#analytic_grades > tbody').children();

        // Succeeded grades tBody
        let sbody = $('#succeeded_grades > tbody').children();

        // Exetastiki grades tBody
        let exbody = $('#exetastiki_grades > tbody').children();

        // Emvolimi grades tBody
        let embody = $('#exetastiki_grades_emvolimi > tbody').children();

        let allGrades = {
            aGrades: this.parseGrades(abody, 'aGrades'),
            sGrades: this.parseGrades(sbody),
            exGrades: this.parseGrades(exbody, 'exGrades').concat(this.parseGrades(embody, 'emGrades')),
        };

        onResponse(loggedIn, allGrades);
    }

    parseGrades(tBody, label) {
        let analyticGrading = [];
        for (let i = 0; i < tBody.length; i++) {
            let lesson = new Lesson();
            let temp = tBody.eq(i).children();

            lesson.id = temp.eq(0).text().trim() + '-' + temp.eq(1).text().trim();
            lesson.title = temp.eq(2).text().trim();
            lesson.grade = temp.eq(3).text().trim() !== '' ? parseFloat(temp.eq(3).text().trim()) : null;
            lesson.semester = parseInt(temp.eq(4).text().trim());
            lesson.enrollDate = temp.eq(5).text().trim();
            lesson.examDate = temp.eq(6).text().trim();
            lesson.state = temp.eq(7).text().trim();
            lesson.label = label;

            analyticGrading.push(lesson);
        }
        return analyticGrading;
    }

    fetchMockPage(onResponse) {
        let htmlData = env.mockPage.values[env.mockPage.use] === 'examsOpen' ? htmlDataOpen : htmlDataClosed;
        this.parseHtml(htmlData, onResponse);
    }

    fetchPage(username, password, onResponse) {
        console.log('logging in user: ', username);
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