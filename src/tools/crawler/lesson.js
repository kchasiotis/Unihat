export default class Lesson {
    id = null;
    code = null; // sef parser
    title = null;
    grade = null;
    semester = null;
    enrollDate = null;
    examDate = null;
    state = null;

    toString() {
        return this.id + ' ' + this.code + ' ' + this.title + ' ' + this.grade + ' ' + this.semester + ' ' + this.enrollDate + ' ' + this.examDate + ' ' + this.state;
    }
}