export interface QuizResponse {
  response_code: number;
  results: QuestionResponse[];
}

export interface QuestionResponse {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}
