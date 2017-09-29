import IcarusCrawler from './icarusCrawler';
import SefCrawler from './sefCrawler';

import {Lesson, LESSON_STATES_ICSD, LESSON_STATES_SEF} from './lesson'

class Crawler {
    fetchPage(username, password, onResponse) {
        // todo: add bachelors
        if (username.includes('icsd')) {
            let ic = new IcarusCrawler();

            ic.fetchPage(username, password, onResponse);
        } else if (username.includes('math') || username.includes('sas')) {
            let sc = new SefCrawler();
            sc.fetchPage(username, password, onResponse);
        } else {
            onResponse({status: 501});
        }
    }

    fetchMockPage(username, onResponse) {
        if (username.includes('icsd')) {
            let ic = new IcarusCrawler();

            ic.fetchMockPage(onResponse);
        } else if (username.includes('math') || username.includes('sas')) {
            let sc = new SefCrawler();

            sc.fetchMockPage(onResponse);
        } else {
            onResponse({status: 501});
        }
    }

    logout() {
        // todo: improve logout logic
        new IcarusCrawler().logout();
        new SefCrawler().logout();
    }
}

export {Crawler, Lesson, LESSON_STATES_ICSD, LESSON_STATES_SEF};