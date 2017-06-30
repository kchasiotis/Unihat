import IcarusCrawler from './icarusCrawler';
import SefCrawler from './sefCrawler';


class crawler {
    fetchPage(username, password, onResponse) {
        if (username.includes('icsd')) {
            let ic = new IcarusCrawler();

            ic.fetchPage(username, password, onResponse);
        } else if (username.includes('math') || username.includes('sas')) {
            let sc = new SefCrawler();
            sc.fetchPage(username, password, onResponse);
        }
    }

    fetchMockPage(username, onResponse) {
        if (username.includes('icsd')) {
            let ic = new IcarusCrawler();

            ic.fetchMockPage(onResponse);
        } else if (username.includes('math') || username.includes('sas')) {
            let sc = new SefCrawler();

            sc.fetchMockPage(onResponse);
        }
    }

    logout() {

    }
}

export default crawler;