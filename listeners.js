'use strict';

renderStartPage();

function handleStartClick() {
// listens for start button to be clicked and then shows the first quiz question page
    $('.js-start-button').click(function(event) {
        event.preventDefault();
        toggleBackground();
        // render question 1
        renderQuizQuestion(questionIndex);
        // render question count div
        renderQuestionProgress(questionNumber);
        // render score div
        renderScore(score);
        handleSubmitClick();
    });
}

function handleSubmitClick() {
// listens for submit click and calls evaluateAnswer
    $('.js-submit-button').click(function(event) {
        event.preventDefault();
        // store user input
       const userAnswer = $('input[name="quiz"]:checked').val();
       // render question count div
        renderQuestionProgress(questionNumber);
       // render score div
        renderScore(score); 

         if ($('input[name="quiz"]:checked').length === 1) {
            evaluateAnswer(userAnswer, questionIndex);
         } else {
             $('.js-error-alert').text("Please select an answer");
         };
    });
};

function handleNextClick() {
// listens for click of next button and renders next question, question count, and score
    $('.js-next-button').click(function() {
       event.preventDefault();
        ++questionNumber;
        ++questionIndex;
        renderQuizQuestion(questionIndex);
        renderScore(score);
        renderQuestionProgress(questionNumber);
        handleSubmitClick();
    });
};

function handleFinishClick() {
    $('.js-finish-button').click(function() {
        renderFinalPage();
    });
};

function handleRetakeQuizClick() {
// listens for click on 'Take Quiz Again' and renders the start page for the quiz
    $('.js-retake-quiz-button').click(function() {
        event.preventDefault();
        score = 0;
        questionIndex = 0;
        questionNumber = 1;
        $('.js-question-progress').text('');
        $('.js-score-display').text('');
        $('main').html(startPage);
        toggleBackground();
        handleStartClick();
    });
};

handleStartClick();