'use strict';

function handleStartClick() {
// listens for start button to be clicked and then shows the first quiz question page
    $('.js-start-button').click(function(event) {
        event.preventDefault();
        // render question 1
        renderQuizQuestion(questionIndex);
        // render question count div
        renderQuestionProgress(questionNumber);
        // render score div
        renderScore(score);
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
        renderQuestionProgress(questionNumber);
       // render score div
        renderScore(score); 

        if ($('input[name="quiz"]:checked').length === 1) {
            evaluateAnswer(userAnswer, questionIndex);
        } else {
            alert("Please select an answer");
        };
    });
    console.log(`handleSubmitClick ran`);
};

function handleNextClick() {
// listens for click of next button and renders next question, question count, and score
    $('.js-next-button').click(function() {
       event.preventDefault();
       try {
           ++questionNumber;
           ++questionIndex;
           renderQuizQuestion(questionIndex);
           renderScore(score);
           renderQuestionProgress(questionNumber);
           handleSubmitClick();
        }   catch(err) {
                renderFinalPage();
        };
    });
    console.log(`handleNextClick ran`);
};

handleStartClick();


/*
function handleTakeQuizAgainClick() {
// listens for click on 'Take Quiz Again' and renders the first question to the DOM
    console.log(`handleNextClick ran`);
};

*/