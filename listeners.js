'use strict';

function handleStartClick() {
// listens for start button to be clicked and then shows the first quiz question page
    $('.js-start-button').click(function(event) {
        event.preventDefault();

        // render question 1
        renderQuizQuestion(0);
        // render question count div
        renderQuestionProgress(1);
        // render score div
        renderScore(0);
        handleSubmitClick();
    });
    console.log(`handleStartClick ran`);
}

function handleSubmitClick() {
// listens for submit click and calls evaluateAnswer
    $('.js-submit-button').click(function(event) {
        event.preventDefault();

        // store user input
       const userAnswer = $('input[name="quiz"]:checked').next('label').text();
       
       // render question count div
        renderQuestionProgress(1);
       // render score div
        renderScore(1);

        evaluateAnswer(userAnswer);
    });
    console.log(`handleSubmitClick ran`);
};

handleStartClick();

function handleNextClick() {
// listens for click of next button and renders next question, question count, and score
    $('.js-next-button').click(function() {
        event.preventDefault();
        renderQuizQuestion(1);

    })
    console.log(`handleNextClick ran`);
};

/*


function handleTakeQuizAgainClick() {
// listens for click on 'Take Quiz Again' and renders the first question to the DOM
    console.log(`handleNextClick ran`);
};

*/