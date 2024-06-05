import { tenQuestions } from './startquiz';
import { updateCurrentScore, updateCurrentQuestion } from './main';

interface IUserAnswer {
  question: string;
  option: number;
  isAnswerCorrect: boolean;
}

let pointsTotal: number = 0;
const userAnswers: IUserAnswer[] = [];
let correctAnswers: number = 0;

const questionText: any = document.querySelector('#questionText');

// collects the answer selected and adds it into userAnswers Array
function collectUserAnswers(): any {
  const selectedRadios: any = document.querySelector('input[type="radio"]:checked');

  userAnswers.push({
    question: questionText?.textContent,
    option: parseInt(selectedRadios.value),
    isAnswerCorrect: false,
  });
}

// function to check if the answer is correct
function isAnswerCorrect(
  currentQuestionImport: number,
  pointsTotalImport: number,
): void {
  collectUserAnswers();
  const currentOption = userAnswers[currentQuestionImport].option;
  const currentQuestion = tenQuestions[currentQuestionImport];

  pointsTotal = pointsTotalImport;

  if (currentQuestion.correctOptionIndex === currentOption) {
    pointsTotal += calculatePointsForDifficulty(currentQuestion.difficulty);
    userAnswers[currentQuestionImport].isAnswerCorrect = true;
  } else {
    pointsTotal -= 1;
  }

  // updates the values for currentQuestion & currentScore and exports the result to main.ts variables
  currentQuestionImport += 1;
  updateCurrentQuestion(currentQuestionImport);
  updateCurrentScore(pointsTotal);
}

//  calculates how many points given for correct answer based on question difficulty
function calculatePointsForDifficulty(difficulty: number): number {
  switch (difficulty) {
    case 1:
      return 1;
    case 2:
      return 3;
    case 3:
      return 5;
    default:
      return 0;
  }
}

// generates the total amount of correct answers at the end of the quiz. 
function setTotalCorrectAnswers():number {
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i].isAnswerCorrect) {
      correctAnswers += 1;
    }
  }
  return correctAnswers;
}

// used to reset the variables in this module when starting a new quiz, called from startquiz.ts
function resetVariables(): any {
  pointsTotal = 0;
  correctAnswers = 0;
  userAnswers.length = 0;
}


export { isAnswerCorrect, setTotalCorrectAnswers, resetVariables };