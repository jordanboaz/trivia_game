// https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean
import api from './api';
import { QuestionResponse, QuizResponse } from '../types/QuizResponse';
import { Question } from '../types/Question';

export interface Request {
  amount?: number;
  difficulty?: string;
  type?: string
}
const getQuestions = ({ amount = 10, difficulty = 'hard', type = 'boolean' }: Request) => {
  const url = '/api.php';
  const params = {
    amount, difficulty, type,
  };
  return doRequest(url, params);
};

const doRequest = async (url: string, customParams = {}): Promise<Question[]> => {
  try {
    const { data } = await api.get(url, { params: customParams });

    return cleanResult(data);
  } catch (error) {
    throw error.message;
  }
};

const cleanResult = (result: QuizResponse) => result.results.map((question): Question => {
  const parsedQuestion: Question = {
    category: question.category,
    correctAnswer: question.correct_answer,
    difficulty: question.difficulty,
    incorrectAnswers: question.incorrect_answers,
    question: question.question,
    type: question.type,
  };
  return parsedQuestion;
});

export { getQuestions };
