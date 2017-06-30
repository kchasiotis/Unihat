import SefCrawler from '../src/tools/crawler/sefCrawler';
import user from '../src/tools/crawler/sefCrawler/.user'

describe('Sef crawler', function () {
    let sc = new SefCrawler();
    it('should fetch the grades', function (done) {
        sc.fetchMockPage((logged, grades) => {
            console.log(grades.sGrades[0]);

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
        sc.fetchPage(user.username, user.password, (logged, grades) => {
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
