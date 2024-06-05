import { tenQuestions } from './startquiz';

let currentQuestion: number;
const questionText: any =
  document.querySelector('#questionText');

const optionOneLabel: any = document.querySelector('#optionOneLabel');
const optionTwoLabel: any = document.querySelector('#optionTwoLabel');
const optionThreeLabel: any = document.querySelector('#optionThreeLabel');
const questionAltOne: any = document.querySelector('#questionAltOne');
const questionAltTwo: any = document.querySelector('#questionAltTwo');
const questionAltThree: any = document.querySelector('#questionAltThree');
const questionCounter: any =
  document.querySelector('#questionCounter');
const nextQuestionBtn: any =
  document.querySelector('#nextQuestionBtn');

// enables the next question when the user selects an answer
function enableNextQuestionBtn(): any {
  nextQuestionBtn.disabled = false;
}

// eventlisteners when the user selects an answer
questionAltOne.addEventListener('click', enableNextQuestionBtn);
questionAltTwo.addEventListener('click', enableNextQuestionBtn);
questionAltThree.addEventListener('click', enableNextQuestionBtn);

// Unchecks the radio buttons and disables answer question button when displaying next question
function resetRadioCheck(): any {
  questionAltOne.checked = false;
  questionAltTwo.checked = false;
  questionAltThree.checked = false;
  nextQuestionBtn.disabled = true;
}

function displayNextQuestion(
  currentQuestion: number,
): any {
  resetRadioCheck();
 
  if (currentQuestion <= 9) {
    const question: string = tenQuestions[currentQuestion].question;

    questionText.textContent = question;

    const options: string[] = tenQuestions[currentQuestion].options;

    optionOneLabel.textContent = options[0];
    optionTwoLabel.textContent = options[1];
    optionThreeLabel.textContent = options[2];


    questionCounter.textContent = `Fråga ${currentQuestion + 1} / 10`;
    
    // Changes the next question button to Finish Quiz button
    if (currentQuestion === 9) {
      if (nextQuestionBtn !== null) {
        nextQuestionBtn.textContent = 'Avsluta Quiz';
      }
    } else {
      nextQuestionBtn.textContent = 'Nästa fråga';
    }
  } 
}

export { displayNextQuestion, currentQuestion };