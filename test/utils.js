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

let rightAnswers = 0;

export function userAnswer() {


    const firstAnswer = prompt('Was Redbeard the greatest pirate of his time?');

    if (countsAsYes(firstAnswer));
    rightAnswers++;

    const secondAnswer = prompt('Was the booty hidden in the Statue of Liberty?');

    if (!countsAsYes(secondAnswer));
    rightAnswers++;

    const thirdAnswer = prompt('Was Hook considered the greatest pirate movie by RedBeard?');

    if (countsAsYes(thirdAnswer));
    rightAnswers++;

}