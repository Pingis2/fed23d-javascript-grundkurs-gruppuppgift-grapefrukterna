import { tenQuestionsArray } from './10Questions';
import { startTimer } from './timer';
import { displayNextQuestion } from './display-question';
import { updateCurrentQuestion, updateCurrentScore } from './main';
import { resetVariables } from './checkanswers';

const bodyElement: any = document.querySelector('#body');

let tenQuestions: any[];

// Function to start a new quiz
function startNewQuiz(): void {
  // Call function to get 10 random questions
  tenQuestions = tenQuestionsArray();

  bodyElement.classList.remove('swedenResult');
  bodyElement.classList.remove('norwayResult');
  

  // Call function to start the timer
  startTimer();

  // Initialize variables
  const currentScore = 0;
  const currentQuestion = 0;
  
  // updates these values globally in the main.ts file
  updateCurrentQuestion(currentQuestion);
  updateCurrentScore(currentScore);

  // call to reset the variables in checkanswers.ts
  resetVariables();

  // Call function to display the next question
  displayNextQuestion(currentQuestion);

  // Show the question section
  document.getElementById('questionPage')?.classList.remove('hidden');

  // Hide the start section
  document.getElementById('startPage')?.classList.add('hidden');

  // Hide the results section
  document.getElementById('resultPage')?.classList.add('hidden');
}

const startQuizBtn = document.getElementById('startQuizBtn');

// If startQuizBtn is not null or undefined, then add an event listener; otherwise, do nothing.
startQuizBtn?.addEventListener('click', startNewQuiz);

export { startNewQuiz, tenQuestions };
