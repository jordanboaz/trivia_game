import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './quiz';

export const rootStore = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export type RootState = ReturnType<typeof rootStore.getState>
