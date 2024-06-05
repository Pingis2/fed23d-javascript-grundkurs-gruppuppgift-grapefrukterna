import './scss/style.scss'; // Importera huvud-SCSS-filen
import { displayNextQuestion } from './display-question';
import { stopTimer } from './timer';
import { startNewQuiz } from './startquiz';
import { displayResults } from './results';
import { isAnswerCorrect, setTotalCorrectAnswers } from './checkanswers';

const nextQuestionBtn: HTMLDivElement | null =
  document.querySelector('#nextQuestionBtn');

const playAgainBtn: HTMLDivElement | null = 
  document.querySelector('#playAgainBtn');

// This sets a global value for currentScore that all other modules use as a reference
let currentScore: number;

// This function must be called from other modules that change currentScore, to make sure it's always up to date
// modulecurrentScore is the value that is exported from the modules, it's called currentScore within the modules
function updateCurrentScore(moduleCurrentScore: number): any {
  currentScore = moduleCurrentScore;
}

// This is setting a global value for currentQuestion that all other modules use as a reference
// currentQuestion is an index value, so question 1 will be currentQuestion 0
// When currentQuestion reaches 9, the quiz is done
let currentQuestion: number;

// This function must be called from other modules that change currentQuestion, to make sure it's always up to date
// moduleCurrentQuestion is the value that is exported from the modules, it's called currentQuestion within the modules
function updateCurrentQuestion(moduleCurrentQuestion: number): any {
  currentQuestion = moduleCurrentQuestion;
}

// This is an event listener for displaying next question when the used clicks the button
if (nextQuestionBtn !== null) {
  nextQuestionBtn.addEventListener('click', function () {
    // If the quiz is still ongoing
    if (currentQuestion < 9) {
      // this updates the currentScore and currentQuestion values
      isAnswerCorrect(currentQuestion, currentScore);
      // this displays the next question
      displayNextQuestion(currentQuestion);
      // When currentQuestion = 9, the quiz is done and the functions to display results screen are called instead
    } else if (currentQuestion >= 9) {
      // make call to view results and stop timer
      isAnswerCorrect(currentQuestion, currentScore);
      stopTimer();
      //  Imports how many questions that were answered correctly, then sends the result to the displayResults function.
      const totalCorrectAnswers: number = setTotalCorrectAnswers();
      displayResults(currentScore, totalCorrectAnswers);
    }
  });
};

// if the user wants to play again
if (playAgainBtn !== null) {
  playAgainBtn.addEventListener('click', startNewQuiz);
};

// theme toggle button
let chosenTheme: string = 'dark';
const bodyElement: any = document.querySelector('#body');
const themeToggleBtn: HTMLButtonElement | null = 
  document.querySelector('#themeToggleBtn');

if (themeToggleBtn !== null) {
  themeToggleBtn.addEventListener('click', toggleTheme);
}

function toggleTheme(): void {
  if (chosenTheme === 'dark') {
    bodyElement.classList.remove('darkTheme');
    bodyElement.classList.add('lightTheme');
    chosenTheme = 'light';
  } else { 
    bodyElement.classList.remove('lightTheme');
    bodyElement.classList.add('darkTheme');
    chosenTheme = 'light';
    chosenTheme = 'dark';
  }
}

export { updateCurrentQuestion, updateCurrentScore };
