import IcarusCrawler from './icarusCrawler';
import SefCrawler from './sefCrawler';


class crawler {
    fetchPage(username, password, onResponse) {
        // todo: add bachelors
        if (username.includes('icsd')) {
            let ic = new IcarusCrawler();

            ic.fetchPage(username, password, onResponse);
        } else if (username.includes('math') || username.includes('sas')) {
            let sc = new SefCrawler();
            sc.fetchPage(username, password, onResponse);
        } else {
            onResponse(false);
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
            onResponse(false);
        }
    }

    logout() {

    }
}

export default crawler;