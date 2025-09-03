import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      question: "Как хорошо вы знаете React?",
      options: ["Хорошо", "Средне", "Плохо"],
      answer: null,
    },
    {
      id: 2,
      question: "Использовали ли вы Redux?",
      options: ["Да", "Нет"],
      answer: null,
    },
  ],
  submitted: false,
  result: null,
};

const anketeSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, answer } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);
      if (question) {
        question.answer = answer;
      }
    },
    submitAnswers: (state) => {
      state.submitted = true;
      state.result = state.questions.map((q) => ({
        question: q.question,
        answer: q.answer,
      }));
    },
    resetQuestionnaire: () => initialState,
  },
});

export const { answerQuestion, submitAnswers, resetQuestionnaire } =
  anketeSlice.actions;

export default anketeSlice.reducer;
