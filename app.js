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
    console.log(firstName);

    const lastName = prompt('What is your last name?');
    console.log(lastName);

    let firstAnswer = prompt('Is Tahoe split by 2 States?');

    let correctAnswers = 0;

    if (firstAnswer.charAt(0).toUpperCase() === 'Y') {
        console.log('hell yea');
        correctAnswers++;
        console.log(correctAnswers)
    }

    let secondAnswer = prompt('Is Tahoe the second deepest lake in the US?');


    if (secondAnswer.charAt(0).toUpperCase() === 'Y') {
        console.log('hell yea');
        correctAnswers++;
        console.log(correctAnswers);
    }

    let thirdAnswer = prompt('Is there more then one outlet flowing out of Tahoe?');


    if (thirdAnswer.charAt(0).toUpperCase() !== 'Y') {
        console.log('hell yea');
        correctAnswers++;
        console.log(correctAnswers);
    }

    const finalResults = ('Thanks for taking my quiz,' + firstName + ' ' + lastName + '! You got ' + correctAnswers + ' correct!');

    

    secretDiv.textContent = finalResults;



});