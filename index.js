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

const formBox = `<form>
<fieldset class="js-question-and-answer-choices"></fieldset>
<button class="js-submit-button" type="submit">Submit</button>
</form>`

const answerBox = `<section>
<div class="js-submission-response"></div>
<button class="js-next-button type="submit">Next</button>
</section>`;

let score = 0;
let questionNumber = 1;
let questionIndex = 0;

//catch TypeError??

function generateQuizQuestion(itemIndex) {
    return `<legend>${STORE[itemIndex].question}</legend>
    <input type="radio" name="quiz" id="q1answer1" required="true" value="7,111">
    <label for="q1answer1">${STORE[itemIndex].answers[0]}</label>

    <input type="radio" name="quiz" id="q1answer2" required="true">
    <label for="q1answer2">${STORE[itemIndex].answers[1]}</label>

    <input type="radio" name="quiz" id="q1answer3" required="true">
    <label for="q1answer3">${STORE[itemIndex].answers[2]}</label>

    <input type="radio" name="quiz" id="q1answer4" required="true">
    <label for="q1answer4">${STORE[itemIndex].answers[3]}</label>`
};     

function renderQuizQuestion() {
/* renders the questions to the DOM 
// inserts a legend and input/labels into a fieldset element within a form
// sets the name key of the target object at the proper index of STORE as the inner text of `legend`
// assigns proper name/for/id/class attributes */
    const questionAndAnswers = generateQuizQuestion(questionIndex);

    $('main').html(formBox); 
    $('.js-question-and-answer-choices').html(questionAndAnswers);
};

function renderScore(currentScore) {
    // renders the value of calculateScore to the DOM
    $('.score-display').text(`Score: ${currentScore}/6`);
};
    
function renderQuestionProgress(currentQuestion) {
    // renders the question number the user is currently on to the DOM
    $('.question-progress').text(`Question ${currentQuestion}/6`);
};

function renderCorrectAnswer() {
    // shows text "Correct! Good Job" and calls calculateScore and renderQuizQuestion    
    $('main').html(answerBox); 
    $('.js-submission-response').append(`<p>Correct! Keep up the good work.</p>`);

    score++;

    renderScore(score);
    handleNextClick();
};
    
function renderIncorrectAnswer() {
// shows "Incorrect" and renders correct answer to the DOM; calls renderButtons and calculateScore
    $('main').html(answerBox);
    $('.js-submission-response').append(`<p>Unfortunately, that's incorrect. Here's the correct answer:</p>
    <p>${STORE[questionIndex].correctAnswer}</p>`);

    renderScore(score);

    handleNextClick();
};
  
function renderFinalPage() {
// renders final page text to the DOM and calls calculatePercentageScore
    $('main').html('<p>this is the final page</p>');
};