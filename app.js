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



});