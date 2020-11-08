import { Question } from '../../types/Question';

export interface QuizState {
  questionList: Question[],
  current: number;
  correct: number[],
  incorrect: number[];
  status: 'unstarted' | 'started' | 'finished';
}

export interface SubmitResponse {
  type: string;
  payload: {
    response: string;
  }
}

export const DUMP_QUESTIONS = 'DUMP_QUESTIONS';
