
import { countsAsYes } from './utils.js';
import { countsAsNo } from './utils.js';

// import functions and grab DOM elements
const quizButton = document.getElementById('quiz-1');
const secretDiv = document.getElementById('secret-div');
// initialize state

// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {

    alert('Welcome to the quiz!');

    const confirmation = confirm('Do you want to proceed?');

    if (!confirmation){
        return;
    }

    const firstName = prompt('What is your first name?');


    const lastName = prompt('What is your last name?');
 

    let firstAnswer = prompt('Is Tahoe split by 2 States?');

    let answerResults = 0;


    if (countsAsYes(firstAnswer)){
        answerResults++;
    }


    let secondAnswer = prompt('Is Tahoe the second deepest lake in the US?');


    if (countsAsYes(secondAnswer)){
        answerResults++;
    }



    let thirdAnswer = prompt('Is there more then one outlet flowing out of Tahoe?');


    if (countsAsNo(thirdAnswer)){
        answerResults++;
    }



    // if (thirdAnswer.charAt(0).toUpperCase() !== 'Y') {
    //     console.log('hell yea');
    //     correctAnswers++;
    //     console.log(correctAnswers);
    // }

    const finalResults = ('Thanks for taking my quiz,' + firstName + ' ' + lastName + '! You got ' + answerResults + ' correct!');

    if (answerResults >= 2){
        secretDiv.style.fontFamily = 'Yusei Magic';
    } else {
        secretDiv.style.fontFamily = 'Courier New';
    }
    

    secretDiv.textContent = finalResults;



});