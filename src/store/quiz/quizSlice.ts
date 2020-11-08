import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { QuizState, SubmitResponse } from './types';
import { getQuestions, Request as QuizRequest } from '../../services/quizService';

const INITIAL_STATE: QuizState = {
  questionList: [],
  correct: [],
  incorrect: [],
  current: 0,
  status: 'unstarted',
  loading: false,
};

export const fetchQuiz = createAsyncThunk('quiz/fetch', async (params: QuizRequest) => {
  const quiz = getQuestions(params);
  return quiz;
});

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
    finishQuiz(state) {
      state.status = 'finished';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuiz.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchQuiz.fulfilled, (state, action) => {
      state.loading = false;
      state.questionList = [...action.payload];
    });
  },
});

export const { submitResponse } = quizSlice.actions;

export default quizSlice.reducer;
