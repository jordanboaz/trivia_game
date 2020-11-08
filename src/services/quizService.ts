// https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean
import api from './api';
import { QuizResponse } from '../types/QuizResponse';
import { Question } from '../types/Question';

interface Request {
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

// const doRequest = (url: string, customParams = {}): Promise<Question[]> => new Promise((resolve, reject) => api.get(url, { params: customParams })
//   .then((response) => {
//     const res = cleanResult(response.data);
//     resolve(res);
//   })
//   .catch((err) => reject(err.message)));

const cleanResult = (result: QuizResponse) => result.results;

export { getQuestions };
