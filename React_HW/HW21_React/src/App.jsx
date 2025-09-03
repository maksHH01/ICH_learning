import { useSelector, useDispatch } from "react-redux";
import {
  submitAnswers,
  resetQuestionnaire,
} from "./features/questionnaire/questionnaireSlice";
import Question from "./components/Question";
import Result from "./components/Result";
import "./App.css";

function App() {
  const questions = useSelector((state) => state.questionnaire.questions);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  const handleReset = () => {
    dispatch(resetQuestionnaire());
  };

  return (
    <div className="App">
      <h1>Questionnaire</h1>
      {questions.map((q) => (
        <Question key={q.id} question={q} />
      ))}
      <button onClick={handleSubmit}>Отправить ответы</button>
      <button onClick={handleReset} style={{ marginLeft: "10px" }}>
        Сбросить
      </button>
      <Result />
    </div>
  );
}

export default App;
