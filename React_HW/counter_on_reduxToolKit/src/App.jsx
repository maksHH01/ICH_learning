import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  plusOne,
  minusOne,
  reset,
  setRandomColor,
} from "./redux/slices/countSlice";
import FruitsList from "./components/fruitsList";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer.count);
  const countColor = useSelector((state) => state.countReducer.color);

  return (
    <div>
      <h1 style={{ color: countColor }}>Count: {count}</h1>
      <button onClick={() => dispatch(plusOne())}>plus</button>
      <button onClick={() => dispatch(minusOne())}>minus</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(setRandomColor())}>Random Color</button>

      <hr />

      <FruitsList />
    </div>
  );
}

export default App;
