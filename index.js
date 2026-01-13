class ECTS {
    constructor(score) {
        this.score = score;
    }

    ectsFromScore() {
        const score = this.score;

        if (score >= 90 && score <= 100) return 'A';
        if (score >= 82 && score <= 89) return 'B';
        if (score >= 74 && score <= 81) return 'C';
        if (score >= 65 && score <= 73) return 'D';
        if (score >= 60 && score <= 64) return 'E';
        return 'F';
    }
}

module.exports = ECTS;
