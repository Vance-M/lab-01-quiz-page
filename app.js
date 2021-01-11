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

    prompt('why do you do the thing?');

});