export const LESSON_STATES_ICSD = {
    SUCCEEDED: 'Επιτυχία',
    NO_PARTICIPATION: 'Δε δόθηκε',
    FAILED: 'Αποτυχία',
    CANCELLED: 'Ακύρωση'
};

export const LESSON_STATES_SEF = {
    SUCCEEDED: 'Επιτυχία',
    NO_PARTICIPATION: 'Δεν δόθηκε',
    FAILED: 'Αποτυχία',
    EXEMPTION: 'Απαλλαγή',
    CANCELLED: 'Ακύρωση'
};

export class Lesson {
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
