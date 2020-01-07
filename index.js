'use strict';

// stores all the questions, answer choices, and correct answers
const STORE = [
    {
        question: `How many living (currently spoken by native speakers) languages are known to exist as of 2019?`,
        answers: [`7,111`, `124`, `2,589`, `4,506`],
        correctAnswer: `7,111`
    },
    {
        question: `What country has the largest number of known languages?`,
        answers: [`China`, `Kenya`, `Papua New Guinea`, `Brazil`],
        correctAnswer: `Papua New Guinea`
    },
    {
        question: `How many languages are endangered? (A language is considered "endangered" when its users begin to teach and speak a more dominant language to their children.)`,
        answers: [`49`, `2,895`, `743`, `6,809`],
        correctAnswer: `2,895`
    },
    {
        question: `Behind English and Chinese, what is the 3rd most spoken language in the world?`,
        answers: [`French`, `Spanish`, `Swahili`, `Hindi`],
        correctAnswer: `Hindi`
    },
    {
        question: `Of the following countries, which is NOT one of the top 10 countries with the most languages?`,
        answers: [`Nigeria`, `South Africa`, `Mexico`, `Indonesia`],
        correctAnswer: `South Africa`
    },
    {
        question: `Which continent is home to the largest number of indigenous languages?`,
        answers: [`North America`, `Africa`, `South America`, `Asia`],
        correctAnswer: `Asia`
    }
]

let score = 0;
let questionNumber = 0;

function generateQuizQuestions() {
    return 
};

function renderQuizQuestion() {
// renders the questions to the DOM 
// inserts a legend and input/labels into a fieldset element within a form
// sets the name key of the target object at the proper index of STORE as the inner text of <legend>
// assigns proper name/for/id/class attributes
    console.log(`renderQuizQuestion ran`);
    
    const question = `<legend>How many living (currently spoken by native speakers) languages are known to exist as of 2019?</legend>`;
    const answerChoices = `<input type="radio" name="quiz1" id="q1answer1">
    <label for="q1answer1">7,111</label>

    <input type="radio" name="quiz1" id="q1answer2">
    <label for="q1answer2">124</label>

    <input type="radio" name="quiz1" id="q1answer3">
    <label for="q1answer3">2,589</label>

    <input type="radio" name="quiz1" id="q1answer4">
    <label for="q1answer4">4,506</label>`;

    $('.js-question-and-answer-choices').html(question + answerChoices);
    
};

$(renderQuizQuestion);
/*
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
*/