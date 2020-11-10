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
      const { questionNumber, response } = action.payload;
      const { questionList } = state;
      // const currentQuestionNumber = state.current;
      const currentQuestion = questionList[questionNumber];

      if (currentQuestion.correctAnswer === response) {
        state.correct.push(questionNumber);
      } else {
        state.incorrect.push(questionNumber);
      }
      if (questionNumber + 1 < questionList.length) {
        state.current = questionNumber + 1;
        state.status = 'started';
      } else {
        state.status = 'finished';
      }
    },
    cleanQuiz() {
      return INITIAL_STATE;
    },
    advanceQuiz(state) {
      const { questionList } = state;
      const currentQuestionNumber = state.current;

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

export const { submitResponse, advanceQuiz, cleanQuiz } = quizSlice.actions;

export default quizSlice.reducer;
