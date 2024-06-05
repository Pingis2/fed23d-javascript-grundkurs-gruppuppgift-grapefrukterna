import { quizQuestions } from './questions';

export function tenQuestionsArray(): Array<{
  question: string;
  options: string[];
  correctOptionIndex: number;
  category: string;
  difficulty: number;
}> {
  const questionsArrayCopy = [...quizQuestions];
  const tenQuestionsArray: Array<{
    question: string;
    options: string[];
    correctOptionIndex: number;
    category: string;
    difficulty: number;
  }> = [];

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * questionsArrayCopy.length);
    const selectedQuestion = questionsArrayCopy[randomIndex];

    tenQuestionsArray.push(selectedQuestion);
    questionsArrayCopy.splice(randomIndex, 1);
  }

  return tenQuestionsArray;
}
