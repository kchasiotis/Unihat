let cheerio = require('cheerio-without-node-native');
let axios = require('axios');
let moment = require('moment');
moment().format();

import htmlData from './mockPage';
import {Lesson} from '../lesson';
import {Logger} from '../../logger';

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
            onResponse(null, loggedIn);
            return;
        }

        // Analytic grades tBody
        let allGrades = $('#example1 > tbody').children();
        let parsedAllGrades = this.parseGrades(allGrades);
        parsedAllGrades.sort((lessonA, lessonB) => -moment(lessonA.enrollDate, "DD-MM-YYYY").diff(moment(lessonB.enrollDate, "DD-MM-YYYY"), 'days'));

        let exGrades = parsedAllGrades.filter((lesson) => moment(lesson.enrollDate, "DD-MM-YYYY").diff(moment(parsedAllGrades[0].enrollDate, "DD-MM-YYYY")) === 0);
        exGrades = exGrades.sort((lessonA, lessonB) => lessonB.grade - lessonA.grade);

        let grades = {};
        grades.aGrades = parsedAllGrades.filter((lesson) => moment(lesson.enrollDate, "DD-MM-YYYY").diff(moment(parsedAllGrades[0].enrollDate, "DD-MM-YYYY")) !== 0);
        grades.sGrades = grades.aGrades.filter((lesson) => lesson.grade >= 5 && lesson.code !== '311-1600' && lesson.code !== '311-1650' && lesson.code !== '311-1700');
        grades.exGrades = exGrades;

        onResponse(null, loggedIn, grades);
    }

    parseGrades(tBody) {
        let analyticGrading = [];
        for (let i = 0; i < tBody.length; i++) {
            let lesson = new Lesson();
            let temp = tBody.eq(i).children();

            lesson.title = temp.eq(1).text().trim().replace('&amp;', '&');

            lesson.enrollDate = temp.eq(2).find('span').text().trim().split(' ')[0];
            lesson.enrollDate = moment(lesson.enrollDate, "YYYY-MM-DD").format("DD-MM-YYYY");
            lesson.examDate = temp.eq(3).find('span').text().trim().split(' ')[0];
            lesson.examDate = lesson.examDate === '' ? null : moment(lesson.examDate, "YYYY-MM-DD").format("DD-MM-YYYY");

            lesson.grade = temp.eq(4).text().trim() !== '' ? parseFloat(temp.eq(4).text().trim()) : null;
            lesson.state = temp.eq(5).text().trim();
            lesson.code = temp.eq(0).text().trim();

            lesson.id = temp.eq(0).text().trim() + '_' + lesson.enrollDate;
            lesson.id += lesson.examDate ? '_' + lesson.examDate : '';

            analyticGrading.push(lesson);
        }
        return analyticGrading;
    }

    fetchMockPage(onResponse) {
        this.parseHtml(htmlData, onResponse);
    }

    fetchPage(username, password, onResponse) {
        Logger.info('logging in user: ' + username);
        // todo: remove cheerio
        let cheerio = require('cheerio-without-node-native');

        // region Set up message
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
            Logger.info('Page loaded');
            parseHtml(response.data, onResponse);
        }).catch(function (error) {
            onResponse(error);
            Logger.error(error);
        });

    }

    logout() {
        Logger.info('Logging out');
        let url = 'https://icarus-icsd.aegean.gr/logout.php';

        axios({
            url: url,
            method: 'POST',
            responseType: 'arraybuffer'
        }).then(function (response) {
            Logger.info('Page loaded');
            if (response.status === 200)
                Logger.info('Successful logout')
            // todo: log unsuccessful logout
        }).catch(function (error) {
            Logger.error(error);
        });
    }

}
