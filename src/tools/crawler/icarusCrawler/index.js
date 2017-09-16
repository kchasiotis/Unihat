let cheerio = require('cheerio-without-node-native');
let axios = require('axios');

let iconv = require('iconv-lite');
import {Buffer} from 'buffer';
import htmlDataClosed from './mockExamsClosed';
import htmlDataOpen from './mockExamsOpen';
import env from '../../../../environment'
global.Buffer = Buffer;
import Lesson from '../lesson';
import {Logger} from '../../../tools/logger';

class User {
    username = null;
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
        let loggedIn = $('#header_login_msg').text().trim() === '' && $('#analytic_grades').length >= 1;
        if (!loggedIn) {
            Logger.info('Failed to log in');
            onResponse(null, loggedIn);
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
            aGrades: this.parseGrades(abody),
            sGrades: this.parseGrades(sbody),
            exGrades: this.parseGrades(exbody).concat(this.parseGrades(embody)),
        };

        onResponse(null, loggedIn, allGrades);
    }

    parseGrades(tBody) {
        let analyticGrading = [];
        for (let i = 0; i < tBody.length; i++) {
            let lesson = new Lesson();
            let temp = tBody.eq(i).children();

            lesson.id = temp.eq(0).text().trim() + '-' + temp.eq(1).text().trim();
            lesson.code = temp.eq(1).text().trim();
            lesson.title = temp.eq(2).text().trim().replace('&amp;', '&');
            lesson.grade = temp.eq(3).text().trim() !== '' ? parseFloat(temp.eq(3).text().trim()) : null;
            lesson.semester = parseInt(temp.eq(4).text().trim());
            lesson.enrollDate = temp.eq(5).text().trim();
            lesson.examDate = temp.eq(6).text().trim();
            lesson.state = temp.eq(7).text().trim();

            analyticGrading.push(lesson);
        }
        return analyticGrading;
    }

    fetchMockPage(onResponse) {
        let htmlData = env.mockPage === 'examsOpen' ? htmlDataOpen : htmlDataClosed;
        this.parseHtml(htmlData, onResponse);
    }

    fetchPage(username, password, onResponse) {
        Logger.info('logging in user: ' + username);
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
            Logger.info('Page loaded');
            let data = iconv.decode(new Buffer(response.data), 'iso-8859-7');
            parseHtml(data, onResponse);
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
            let data = iconv.decode(new Buffer(response.data), 'iso-8859-7');
            if (response.status === 200)
                Logger.info('Successful logout')
            // todo: log unsuccessful logout
        }).catch(function (error) {
            Logger.error(error);
        });
    }

}