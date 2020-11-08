import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { QuizState, SubmitResponse } from './types';

const INITIAL_STATE: QuizState = {
  questionList: [],
  correct: [],
  incorrect: [],
  current: 0,
  status: 'unstarted',
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState: INITIAL_STATE,
  reducers: {
    submitResponse(state, action: SubmitResponse) {
      const { response } = action.payload;
      const { questionList } = state;
      const currentQuestionNumber = state.current;
      const currentQuestion = questionList[currentQuestionNumber];

      if (currentQuestion.correctAnswer === response) {
        state.correct.push(currentQuestionNumber);
      } else {
        state.incorrect.push(currentQuestionNumber);
      }

      if (currentQuestionNumber + 1 < questionList.length) {
        state.current = currentQuestionNumber + 1;
        state.status = 'started';
      } else {
        state.status = 'finished';
      }
    },
    finishQuiz(state, action) {
      state.status = 'finished';
    },
  },
});

export const { submitResponse } = quizSlice.actions;

export default quizSlice.reducer;
