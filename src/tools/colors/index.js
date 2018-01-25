let lessonStateColor = (state) => {
    let color = '';
    switch (state) {
        case 'Επιτυχία':
            color = '#5CB85C';
            break;
        case 'Αποτυχία':
            color = '#ED1727';
            break;
        case 'Ακύρωση':
            color = '#000';
            break;
        case 'Δε δόθηκε':
            color = '#697268';
            break;
        default:
            color = '#3F51B5'
    }

    return color;
};

export {lessonStateColor};