import { Question } from './Question';

export interface QuizResponse {
  response_code: number;
  results: Question[];
}
