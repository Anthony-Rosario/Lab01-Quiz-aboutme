const storyBox = document.getElementById('story-results');

export function countsAsYes(answer) {
    return answer.charAt(0).toUpperCase() === 'Y';
}

export function percentage(correctAnswers, totalanswers) {
    return Math.round((correctAnswers / totalanswers) * 100);
}

//resultDisplay
export function resultDisplay(rightAnswers) {
    if (rightAnswers === 3) {
        storyBox.classList.add('light-green');
        storyBox.style.fontFamily = 'helvetica';

    }

    else if (rightAnswers === 2) {
        storyBox.classList.add('green-sheen');
    }

    else {
        storyBox.classList.add('dark-purple');
    }

}


