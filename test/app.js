import { countsAsYes, percentage, resultDisplay } from './utils.js';


const button1 = document.getElementById('quiz-button');
const storyBox = document.getElementById('story-results');



button1.addEventListener('click', () => {
    alert('Yaar be ready?');

    const confirmation = confirm('Proceed?');

    if (!confirmation) return;

    let rightAnswers = 0;
    const totalAnswers = 3;

    const firstName = prompt('What be yee First Name?');
    const lastName = prompt('What be yer last');

    const firstAnswer = prompt('Was Redbeard the greatest pirate of his time?');
    const secondAnswer = prompt('Was the booty hidden in the Statue of Liberty?');
    const thirdAnswer = prompt('Was Hook considered the greatest pirate movie by RedBeard?');
    const resultString = `Hooray ${firstName} ${lastName} yee got ${rightAnswers} correct! That be ${percentage(rightAnswers, totalAnswers)} percent`;


    if (countsAsYes(firstAnswer)) rightAnswers++;
    if (!countsAsYes(secondAnswer)) rightAnswers++;
    if (countsAsYes(thirdAnswer)) rightAnswers++;


    resultDisplay(rightAnswers);

    storyBox.textContent = (resultString);


});



