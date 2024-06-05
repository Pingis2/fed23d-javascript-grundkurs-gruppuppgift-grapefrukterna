import { elapsedTime } from './timer';

const timeCounterResult: any = document.querySelector('#totalTime');
const pointsTotalDisplay: any = document.querySelector('#pointsTotalDisplay');
const correctAnswersDisplay: any = document.querySelector('#correctAnswersDisplay');
const resultsMessage: any = document.querySelector('#resultsMessage');

const bodyElement: any = document.querySelector('#body');

// function that displays the amount of correct answers, total points and how long it took to finish the quiz.
function displayResults(currentScore: number, totalCorrectAnswers: number): any {
  timeCounterResult.textContent = elapsedTime;
  pointsTotalDisplay.textContent = currentScore;
  correctAnswersDisplay.textContent = totalCorrectAnswers;
  setResultsTheme(currentScore, totalCorrectAnswers);
  
  document.getElementById('questionPage')?.classList.add('hidden');
  document.getElementById('resultPage')?.classList.remove('hidden');
}

// add totalCorrectAnswers below as a parameter
function setResultsTheme(currentScore: number, totalCorrectAnswers: number): any {
  if (currentScore > 0) {
    bodyElement.classList.add('swedenResult');
    displayFireworks(totalCorrectAnswers);
  } else {
    bodyElement.classList.add('norwayResult');
    document.getElementById('fireworks')?.classList.add('hidden');
    // this message will show if the user gets 0 correct answers
    resultsMessage.textContent = 'Dra til Norge din forræder!!';
  }

}

// different result message depending on the amount of correct answers
// only runs if the user got at least 1 point

function displayFireworks(totalCorrectAnswers: number): void {
  if (totalCorrectAnswers > 9) {
    resultsMessage.textContent = 'Alla rätt!! Superbra jobbat';
    document.getElementById('fireworks')?.classList.remove('hidden');

  } else if (totalCorrectAnswers > 7) {
    resultsMessage.textContent = 'Riktigt nära nu!!';
    document.getElementById('fireworks')?.classList.add('hidden');

  } else if (totalCorrectAnswers > 5) {
    resultsMessage.textContent = 'Nu börjar det likna något, testa igen';
    document.getElementById('fireworks')?.classList.add('hidden');

  } else if (totalCorrectAnswers > 3) {
    resultsMessage.textContent = 'Det var okej, men bättre kan du';
    document.getElementById('fireworks')?.classList.add('hidden');

  } else if (totalCorrectAnswers > 0) {
    resultsMessage.textContent = 'Ja..... det där var ju inte så bra';
    document.getElementById('fireworks')?.classList.add('hidden');

  } else {
    resultsMessage.textContent = ''; // Clear the message
    document.getElementById('fireworks')?.classList.add('hidden');
  }
}
  

export { displayResults };
