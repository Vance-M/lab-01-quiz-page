// import functions and grab DOM elements
const quizButton = document.getElementById('quiz-1');
// initialize state

// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {

    alert('Welcome to the quiz!');

    const confirmation = confirm('Do you want to proceed?');

    if (!confirmation){
        return;
    }

    const firstName = prompt('WHat is your first name?');
    console.log(firstName);

    const lastName = prompt('What is your last name?');
    console.log(lastName);

    let firstAnswer = prompt('why do you do the thing?');

    let correctAnswers = 0;

    if (firstAnswer.charAt(0).toUpperCase() === 'Y') {
        console.log('hell yea');
        correctAnswers++;
        console.log(correctAnswers)
    }

    let secondAnswer = prompt('why do you do the thing?');


    if (secondAnswer.charAt(0).toUpperCase() === 'Y') {
        console.log('hell yea');
        correctAnswers++;
        console.log(correctAnswers);
    }

    let thirdAnswer = prompt('why do you do the thing?');


    if (thirdAnswer.charAt(0).toUpperCase() === 'Y') {
        console.log('hell yea');
        correctAnswers++;
        console.log(correctAnswers);
    }

    alert('Thanks for taking my quiz! you got ' + correctAnswers + ' correct!')
});