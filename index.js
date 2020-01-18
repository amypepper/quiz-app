'use strict';

// stores all the questions, answer choices, correct answers, and an identifier for the final question
const STORE = [
    {
        question: `How many living (currently spoken by native speakers) languages are known to exist as of 2019?`,
        answers: [`7,111`, `124`, `2,589`, `4,506`],
        correctAnswer: `7,111`,
        isFinal: false
    },
    {
        question: `What country has the largest number of known languages?`,
        answers: [`China`, `Kenya`, `Papua New Guinea`, `Brazil`],
        correctAnswer: `Papua New Guinea`,
        isFinal: false
    },
    {
        question: `How many languages are endangered? (A language is considered "endangered" when its users begin to teach and speak a more dominant language to their children.)`,
        answers: [`49`, `2,895`, `743`, `6,809`],
        correctAnswer: `2,895`,
        isFinal: false
    },
    {
        question: `Behind English and Chinese, what is the 3rd most spoken language in the world?`,
        answers: [`French`, `Spanish`, `Swahili`, `Hindi`],
        correctAnswer: `Hindi`,
        isFinal: false
    },
    {
        question: `Of the following countries, which is NOT one of the top 10 countries with the most languages?`,
        answers: [`Nigeria`, `South Africa`, `Mexico`, `Indonesia`],
        correctAnswer: `South Africa`,
        isFinal: false
    },
    {
        question: `Which continent is home to the largest number of indigenous languages?`,
        answers: [`North America`, `Africa`, `South America`, `Asia`],
        correctAnswer: `Asia`,
        isFinal: true
    }
]

let score = 0;
let questionNumber = 1;
let questionIndex = 0;

const startPage = `<img class="watercolor-map"  src="../images/watercolor-world-map.jpg" alt="watercolor map of the world">
<button class="js-start-button">Start Quiz</button>`;

const formBox = `<form class="ap-inner-container">
<span class="error-alert js-error-alert"></span>
<fieldset class="ap-fieldset js-question-and-answer-choices"></fieldset>
<button class="js-submit-button" type="submit">Submit</button>
</form>`

const answerBox = `<div class="ap-inner-container js-submission-response"></div>
<button class="js-next-button" type="submit">Next</button>`;

const lastAnswerBox = `<div class="ap-inner-container js-submission-response"></div>
<button class="js-finish-button" type="submit">Final Results</button>`;

const finalPageBox = `<div class="ap-inner-container js-quiz-results">
<h2 class="final-score-intro">You did it!</h2>
    <p class="final-score-intro">Final score:</p>
    <p class="final-score"><span class="js-final-score-display"></span>/6</p>
    <p>To learn more about the world's languages, visit <a href="https://www.ethnologue.com" target="_blank">www.ethnologue.com</a>.</p>
</div>
<button class="js-retake-quiz-button" type="submit">Retake Quiz</button>`;

function generateQuizQuestion(itemIndex) {
    return `<div class="fieldset-flex-container">
    <legend>${STORE[itemIndex].question}</legend>
    <label for="answer1"><input type="radio" name="quiz" id="answer1" required="true" value="${STORE[itemIndex].answers[0]}">
    ${STORE[itemIndex].answers[0]}</label>

    <label for="answer2"><input type="radio" name="quiz" id="answer2" required="true" value="${STORE[itemIndex].answers[1]}">
    ${STORE[itemIndex].answers[1]}</label>

    <label for="answer3"><input type="radio" name="quiz" id="answer3" required="true" value="${STORE[itemIndex].answers[2]}">
    ${STORE[itemIndex].answers[2]}</label>

    <label for="answer4"><input type="radio" name="quiz" id="answer4" required="true" value="${STORE[itemIndex].answers[3]}">
    ${STORE[itemIndex].answers[3]}</label>
    </div>`
};     

function toggleBackground() {
    $('.js-background-image').toggleClass('background-image');
};

function renderStartPage() {
    $('main').html(startPage);
}

function renderQuizQuestion() {
/* renders one question to the DOM using the value of `questionIndex` to retrieve the current question from STORE */
    const questionAndAnswers = generateQuizQuestion(questionIndex);

    $('main').html(formBox); 
    $('.js-question-and-answer-choices').html(questionAndAnswers);
};

function renderScore(currentScore) {
    // renders the value of the user's score to the DOM
    $('.js-score-display').text(`Score: ${currentScore}/6`);
};
    
function renderQuestionProgress(currentQuestion) {
    // renders the question number the user is currently on to the DOM
    $('.js-question-progress').text(`Question ${currentQuestion}/6`);
};

function renderCorrectAnswer() {
    // shows text "Correct! Good Job" and increments `score` variable by 1 and calls functions needed for the next question page 
    if (STORE[questionIndex].isFinal === false) { 
        $('main').html(answerBox);
    } else if (STORE[questionIndex].isFinal === true) {
            $('main').html(lastAnswerBox);
            handleFinishClick();
    }; 
    $('.js-submission-response').append(`<p>Correct! Keep up the good work.</p>`);

    score++;

    renderScore(score);
    handleNextClick();
};
    
function renderIncorrectAnswer() {
// shows "Incorrect" and renders correct answer to the DOM; calls functions needed for the next question page
    if (STORE[questionIndex].isFinal === false) { 
        $('main').html(answerBox);
    } else if (STORE[questionIndex].isFinal === true) {
            $('main').html(lastAnswerBox);
            handleFinishClick();
    };
    $('.js-submission-response').append(`<p>Unfortunately, that's incorrect. Here's the correct answer:</p>
    <p>${STORE[questionIndex].correctAnswer}</p>`);

    renderScore(score);
    handleNextClick();
};

function renderFinalPage() {
// renders final page text to the DOM and calls calculatePercentageScore
    $('main').html(finalPageBox);
    $('.js-final-score-display').text(`${score}`);

    handleRetakeQuizClick();
};
