import {Crawler} from './index';
import icarusUser from './icarusCrawler/.user'
import sefUser from './sefCrawler/.user'

describe('Sef crawler', function () {
    let crawler = new Crawler();
    it('should fetch the grades', function (done) {
        crawler.fetchMockPage('sas12035', (error, logged, grades) => {
            // console.log(grades.sGrades)
            // expect(grades.aGrades[0].examDate.format("DD-MM-YYYY")).toBe('15-06-2017');
            // expect(grades.sGrades[0].enrollDate.format("DD-MM-YYYY")).toBe('15-03-2017');

            expect(logged).toBe(true);
            expect(grades.aGrades.length).toBe(48);
            expect(grades.sGrades.length).toBe(10);
            expect(grades.exGrades.length).toBe(12);
            // expect(grades.exGrades).not.toBe(undefined);
            done();
        });
    });

    it('should fetch the grades asynchronously', function (done) {
        crawler.fetchPage(sefUser.username, sefUser.password, (error, logged, grades) => {
                try {
                    expect(logged).toBe(true);
                    expect(grades.aGrades.length).toBeGreaterThan(50);
                    expect(grades.sGrades.length).toBeGreaterThan(11);
                    expect(grades.exGrades).not.toBe(undefined);
                } catch (error) {
                    done.fail(error);
                }
                done();
            }
        );
    });
});

describe('Icarus Crawler', function () {
    let crawler = new Crawler();
    it('should fetch the grades', function (done) {
        crawler.fetchMockPage('icsd11175', (error, logged, grades) => {
            expect(logged).toBe(true);
            expect(grades.aGrades.length).toBeGreaterThan(80);
            expect(grades.sGrades.length).toBeGreaterThan(40);
            expect(grades.exGrades).not.toBe(undefined);
            // expect(grades.exGrades).not.toBe(undefined);
            done();
        });
    });

    it.skip('should fetch the grades asynchronously', function (done) {
        crawler.fetchPage(icarusUser.username, icarusUser.password, (error, logged, grades) => {
                try {
                    expect(logged).toBe(true);
                    expect(grades.aGrades.length).toBeGreaterThan(50);
                    expect(grades.sGrades.length).toBeGreaterThan(11);
                    expect(grades.exGrades).not.toBe(undefined);
                } catch (error) {
                    done.fail(error);
                }
                done();
            }
        );
    });
});
