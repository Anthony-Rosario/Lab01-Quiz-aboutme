export function countsAsYes(answer) {
    return answer.charAt(0).toUpperCase() === 'Y';
}

export function percentage(correctAnswers, totalanswers) {
    return Math.round((correctAnswers / totalanswers) * 100);
}

