let cheerio = require('cheerio-without-node-native');
let axios = require('axios');
let moment = require('moment');
moment().format();

let iconv = require('iconv-lite');
import {Buffer} from 'buffer';
import htmlData from './mockPage';
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

export default class SefCrawler {
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
        let loggedIn = $('#example1').length >= 1;
        if (!loggedIn) {
            onResponse(loggedIn);
            return;
        }

        // User data
        // let user = new User();
        // user.username = $('#header_login[style="display:inline"] > u').text();

        // Analytic grades tBody
        let allGrades = $('#example1 > tbody').children();

        let parsedAllGrades = this.parseGrades(allGrades);
        parsedAllGrades = parsedAllGrades
            .sort((lessonA, lessonB) => -lessonA.enrollDate.diff(lessonB.enrollDate, 'days'));

        // console.log(parsedAllGrades[0].enrollDate);
        let exGrades = parsedAllGrades.filter((lesson) => lesson.enrollDate.diff(parsedAllGrades[0].enrollDate) === 0);

        exGrades = exGrades.sort((lessonA, lessonB) => lessonB.grade - lessonA.grade);

        let grades = {}
        
        grades.aGrades = parsedAllGrades.filter((lesson) => lesson.enrollDate.diff(parsedAllGrades[0].enrollDate) !== 0),
        grades.sGrades = grades.aGrades.filter((lesson) => lesson.grade >= 5),
        grades.exGrades = exGrades

        onResponse(loggedIn, grades);
    }

    parseGrades(tBody) {
        let analyticGrading = [];
        for (let i = 0; i < tBody.length; i++) {
            let lesson = new Lesson();
            let temp = tBody.eq(i).children();

            lesson.title = temp.eq(1).text().trim();

            lesson.enrollDate = temp.eq(2).find('span').text().trim().split(' ')[0];
            lesson.enrollDate = moment(lesson.enrollDate, "YYYY-MM-DD");
            lesson.examDate = temp.eq(3).find('span').text().trim().split(' ')[0];
            lesson.examDate = lesson.examDate === '' ? null : moment(lesson.examDate, "YYYY-MM-DD");

            lesson.grade = temp.eq(4).text().trim() !== '' ? parseFloat(temp.eq(4).text().trim()) : null;
            // lesson.semester = parseInt(temp.eq(4).text().trim());
            lesson.state = temp.eq(5).text().trim();
            lesson.id = temp.eq(0).text().trim() + '_' + lesson.enrollDate.format("DD-MM-YYYY");
            lesson.id += lesson.examDate ? '_' + lesson.examDate.format("DD-MM-YYYY") : '';

            analyticGrading.push(lesson);
        }
        return analyticGrading;
    }

    fetchMockPage(onResponse) {
        this.parseHtml(htmlData, onResponse);
    }

    fetchPage(username, password, onResponse) {
        let cheerio = require('cheerio-without-node-native');

        // region Set up message
        //let url = 'https://requestb.in/18oa3zy1';
        let url = 'https://sef.samos.aegean.gr/authentication.php';

        let details = {
            password: password,
            username: username
        };

        let formBody = [];

        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }

        formBody = formBody.join("&");
        // endregion


        let parseHtml = this.parseHtml;

        axios({
            url: url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: formBody
        }).then(function (response) {
            // console.log('Page loaded');
            // let data = iconv.decode(new Buffer(response.data), 'iso-8859-7');
            parseHtml(response.data, onResponse);
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
