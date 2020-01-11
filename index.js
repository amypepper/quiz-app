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

const answerBox = `<section class="js-submission-response"></section>
<button class="js-next-button>Next</button>`;

let score = 0;

let questionNumber = 0;


function generateQuizQuestion(index) {
    return `<legend>${STORE[index].question}</legend>
    <input type="radio" name="quiz" id="q1answer1" required="true">
    <label for="q1answer1">7,111</label>

    <input type="radio" name="quiz" id="q1answer2" required="true">
    <label for="q1answer2">124</label>

    <input type="radio" name="quiz" id="q1answer3" required="true">
    <label for="q1answer3">2,589</label>

    <input type="radio" name="quiz" id="q1answer4" required="true">
    <label for="q1answer4">4,506</label>`;
};     

function renderQuizQuestion(itemIndex) {
// renders the questions to the DOM 
// inserts a legend and input/labels into a fieldset element within a form
// sets the name key of the target object at the proper index of STORE as the inner text of <legend>
// assigns proper name/for/id/class attributes
    const questionAndAnswers = generateQuizQuestion(itemIndex);

    $('main').html(formBox); 
    $('.js-question-and-answer-choices').html(questionAndAnswers);
    
    console.log(`renderQuizQuestion ran`);
};

function renderScore(currentScore) {
    // renders the value of calculateScore to the DOM
    $('.score-display').text(`Score: ${currentScore}/6`);
    console.log(`renderScore ran`);
};
    
function renderQuestionProgress(currentQuestion) {
    // renders the question number the user is currently on to the DOM
    console.log(`renderQuestionProgress ran`);
    $('.question-progress').text(`Question ${currentQuestion}/6`);  
};

function renderCorrectAnswer() {
    // shows text "Correct! Good Job" and calls calculateScore and renderQuizQuestion    
    $('main').html(answerBox); 
    $('.js-submission-response').html(`<p>Correct! Keep up the good work.</p>`);

    console.log(`renderCorrectAnswer ran`);
};
    
function renderIncorrectAnswer() {
// shows "Incorrect" and renders correct answer to the DOM; calls renderButtons and calculateScore
    $('main').html(answerBox);
    $('.js-submission-response').html(`<p>Unfortunately, that's incorrect. Here's the correct answer:</p>
    <p>${STORE[0].correctAnswer}</p>`);

    console.log(`renderIncorrectAnswer ran`);
};


/*    
renderFinalPage() {
// renders final page text to the DOM and calls calculatePercentageScore
    console.log(`handleNextClick ran`);
};


*/