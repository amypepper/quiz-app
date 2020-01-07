'use strict';

renderQuizQuestion() {
    // renders the questions to the DOM in sequential order
       console.log(`renderQuizQuestion ran`);
};

renderButtons() {
// renders the buttons to the DOM based on the other HTML content 
    console.log(`renderButtons ran`);
} 

renderCorrectAnswer() {
    // shows text "Correct! Good Job" and calls renderButtons and calculateScore
        console.log(`renderCorrectAnswer ran`);
    };
    
renderIncorrectAnswer() {
// shows "Incorrect" and renders correct answer to the DOM; calls renderButtons and calculateScore

    console.log(`renderIncorrectAnswer ran`);
};

renderScore() {
// renders the value of calculateScore to the DOM
    console.log(`renderScore ran`);
};
    
renderFinalPage() {
// renders final page text to the DOM and calls calculatePercentageScore
    console.log(`handleNextClick ran`);
};

evaluateAnswer() {
// compares stored value from event.currentTarget to correct answer and calls either renderCorrect... or renderIncorrect...
    console.log(`evaluateAnswer ran`);
};