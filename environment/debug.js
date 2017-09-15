import icarusUser from '../src/tools/crawler/icarusCrawler/.user'
import sefUser from '../src/tools/crawler/sefCrawler/.user'

const env = {
    debug: true,
    autoLogin: true,
    shortSchedule: true,
    mockPage: ['examsOpen', 'examsClosed'][0],
    drawerRoute: ['aGrades', 'exGrades', 'chartScreen'][0],
    user: [icarusUser, sefUser][0]
};

export default env