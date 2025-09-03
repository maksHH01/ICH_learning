import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      text: "Вопрос 1: Любите ли вы React?",
      options: ["Да", "Нет"],
      answer: null,
    },
    {
      id: 2,
      text: "Вопрос 2: Используете ли вы Redux?",
      options: ["Да", "Нет"],
      answer: null,
    },
    {
      id: 3,
      text: "Вопрос 3: Любите ли вы стили в React?",
      options: ["Да", "Нет"],
      answer: null,
    },
    {
      id: 4,
      text: "Вопрос 4: Используете ли вы компонентный подход в Redux?",
      options: ["Да", "Нет"],
      answer: null,
    },
    {
      id: 5,
      text: "Вопрос 5: Используете ли вы чат GPT в работе с React?",
      options: ["Да", "Нет"],
      answer: null,
    },
  ],
  result: null,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, answer } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);
      if (question) question.answer = answer;
    },
    submitAnswers: (state) => {
      state.result = state.questions
        .map((q) => `${q.text} - ${q.answer || "-"}`)
        .join("\n");
    },
    resetQuestionnaire: (state) => {
      state.questions.forEach((q) => (q.answer = null));
      state.result = null;
    },
  },
});

export const { answerQuestion, submitAnswers, resetQuestionnaire } =
  questionnaireSlice.actions;
export default questionnaireSlice.reducer;
