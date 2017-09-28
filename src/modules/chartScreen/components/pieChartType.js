export default pieChartType = {
    average: {
        total: 10,
        title: 'Μέσος όρος',
        description: 'Συμπεριλαμβάνει όλα τα μαθήματα με βαθμό πάνω από 5'
    },
    succeedLessons: {
        total: {
            icsd: 55,
            math: 34,
            sas: 34
        },
        title: 'Περασμένα μαθήματα',
        description: 'Πλήθος περασμένων μαθημάτων'
    },
    lessonsPerGrade: {
        title: 'Μαθήματα ανά βαθμολογία',
        description: 'Πόσα μαθήματα έχουν περαστεί (κάθετος άξονας) με τι βαθμολογία (οριζόντιος άξονας)'
    }
}