export default pieChartType = {
    average: {
        total: 10,
        title: 'Μέσος όρος',
        description: 'Ο μέσος όρος είναι ενδεικτικός και μπορεί να διαφέρει από τον βαθμό πτυχίου'
    },
    succeedLessons: {
        total: {
            icsd: 56,
            math: 34,
            sas: 34
        },
        title: 'Επιτυχή μαθήματα',
        description: 'Η πτυχιακή/διπλωματική μετριέται ως ένα μάθημα'
    },
    lessonsPerGrade: {
        title: 'Μαθήματα ανά βαθμολογία',
        description: 'Πλήθος επιτυχών μαθημάτων (κάθετος άξονας) βαθμολογία (οριζόντιος άξονας)'
    }
}