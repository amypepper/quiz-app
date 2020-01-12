'use strict'

function evaluateAnswer(answer, itemIndex) {
    // compares stored value from <label> element to the correct answer and calls either renderCorrect... or renderIncorrect...
    if(answer === STORE[itemIndex].correctAnswer) {
        renderCorrectAnswer();
    };
    if(answer !== STORE[itemIndex].correctAnswer) {
        renderIncorrectAnswer();
    }
    console.log(`evaluateAnswer ran`);
};

/*

calculatePercentageScore() {
// takes value returned by calculateScore and converts it to a percent value
    console.log(`calculateScore ran`);
}
*/