import Crawler from './index';
// import user from '../src/tools/crawler/sefCrawler/.user'

describe('Crawler', function () {
    let crawler = new Crawler();
    it('should fetch the grades', function (done) {
        crawler.fetchMockPage('icsd11175', (logged, grades) => {
            expect(logged).toBe(true);
            expect(grades.aGrades.length).toBeGreaterThan(80);
            expect(grades.sGrades.length).toBeGreaterThan(40);
            expect(grades.exGrades).not.toBe(undefined);
            // expect(grades.exGrades).not.toBe(undefined);
            done();
        });
    });
    it('should fetch the grades', function (done) {
        crawler.fetchMockPage('math13028', (logged, grades) => {
            // expect(grades.aGrades[0].examDate.format("DD-MM-YYYY")).toBe('15-06-2017');
            expect(grades.sGrades[0].enrollDate.format("DD-MM-YYYY")).toBe('15-03-2017');

            expect(logged).toBe(true);
            expect(grades.aGrades.length).toBe(60);
            expect(grades.sGrades.length).toBe(14);
            expect(grades.exGrades.length).toBe(12);
            // expect(grades.exGrades).not.toBe(undefined);
            done();
        });
    });
    it.skip('should fetch the grades asynchronously', function (done) {
        crawler.fetchPage(user.username, user.password, (logged, grades) => {
                // console.log(logged);
                // console.log(grades.aGrades.length);
                // console.log(grades.sGrades.length);
                // console.log(grades.exGrades.length);
                // console.log(grades.sGrades);
                expect(logged).toBe(true);
                expect(grades.aGrades.length).toBeGreaterThan(50);
                expect(grades.sGrades.length).toBeGreaterThan(11);
                expect(grades.exGrades).not.toBe(undefined);
                done();
            }
        );
    });
});

describe.skip('Icarus Crawler', function () {
    let ic = new IcarusCrawler();
    it('should fetch the grades', function (done) {
        ic.fetchMockPage((logged, grades) => {
            // console.log(grades);
            expect(logged).toBe(true);
            expect(grades.aGrades.length).toBeGreaterThan(80);
            expect(grades.sGrades.length).toBeGreaterThan(40);
            expect(grades.exGrades).not.toBe(undefined);
            done();
        });
    });
});
