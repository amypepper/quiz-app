'use strict';

function handleStartClick() {
// listens for start button to be clicked and then shows the first quiz question page
    console.log(`handleStartClick ran`);
    $('.js-button').click(function() {
        // render question 1
        renderQuizQuestion();
       
        // render submit button
        renderSubmitButton();
        // render question div
        renderScore(0);
        // render score div
        renderScore(0);
    });
}

handleStartClick();


/*
function handleRadioClick() {
// listens for radio button click and stores the value of the input associated w/ it
    console.log(`handleRadioClick ran`);
};

function handleSubmitClick() {
// listens for submit click and calls evaluateAnswer
    console.log(`handleSubmitClick ran`);
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