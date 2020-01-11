'use strict'

function evaluateAnswer(answer) {
    // compares stored value from <label> element to the correct answer and calls either renderCorrect... or renderIncorrect...
    if(answer === STORE[0].correctAnswer) {
        renderCorrectAnswer();
    };
    if(answer !== STORE[0].correctAnswer) {
        renderIncorrectAnswer();
    }
    console.log(`evaluateAnswer ran`);
};

/*
calculateScore() {
// stores the count of questions answered correctly
    console.log(`calculateScore ran`);
};

calculatePercentageScore() {
// takes value returned by calculateScore and converts it to a percent value
    console.log(`calculateScore ran`);
}
*/