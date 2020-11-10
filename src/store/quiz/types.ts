import { Question } from '../../types/Question';

export interface QuizState {

  questionList: Question[],
  current: number;
  correct: number[],
  incorrect: number[];
  status: 'unstarted' | 'started' | 'finished';
  loading: boolean;
}

export interface SubmitResponse {
  type: string;
  payload: {
    questionNumber: number;
    response: string;
  }
}

export const DUMP_QUESTIONS = 'DUMP_QUESTIONS';
