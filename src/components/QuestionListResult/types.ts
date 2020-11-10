import { QuizState } from '../../store/quiz/types';

export type Props = Omit<QuizState, 'current' | 'loading' | 'status'>
