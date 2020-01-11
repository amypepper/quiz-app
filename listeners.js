'use strict';

function handleStartClick() {
// listens for start button to be clicked and then shows the first quiz question page
    console.log(`handleStartClick ran`);
    $('.js-start-button').click(function(event) {
        event.preventDefault();
        // render question 1
        renderQuizQuestion(0);
        // render question div
        renderScore(0);
        // render score div
        console.log(`handleStartClick ran`);
    });
}

function attachSubmitListener() {
// listens for submit click and calls evaluateAnswer
    $('.js-submit-button').on('click', function(event) {
        event.preventDefault();
        // render question 1
        renderQuizQuestion(1);
        // render submit button
      
        renderScore(1);
        // render score div
    });
    console.log(`handleSubmitClick ran`);
};
handleStartClick();
attachSubmitListener();


/*
function handleRadioClick() {
// listens for radio button click and stores the value of the input associated w/ it
    console.log(`handleRadioClick ran`);
};



function handleNextClick() {
// uses current page id to call renderQuizQuestion and pass in the correct HTML for the next question
    console.log(`handleNextClick ran`);
};

function handleTakeQuizAgainClick() {
// listens for click on 'Take Quiz Again' and renders the first question to the DOM
    console.log(`handleNextClick ran`);
};

*/