import { Question } from '../../types/Question';

export interface Props extends Question {
  questionIndex: number;
  questionStatus: 'unaswered' | 'success' | 'failure'
  onPress: any;
  onFeedbackEnd: any;
  images?: string[];
}
