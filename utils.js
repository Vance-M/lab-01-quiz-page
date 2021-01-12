// COunts as a yes function


export function countsAsYes(Answer) {
    if (Answer.charAt(0).toUpperCase() === 'Y'){
        return true;}

}

export function countsAsNo(Answer) {
    if (Answer.charAt(0).toUpperCase() !== 'Y'){
        return true;}

}


// if (firstAnswer.charAt(0).toUpperCase() === 'Y') {
//     console.log('hell yea');
//     correctAnswers++;
//     console.log(correctAnswers)
// }