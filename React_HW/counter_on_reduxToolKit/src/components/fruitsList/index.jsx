import { useState } from "react";
import { addFruit } from "../../redux/slices/fruitsSlice";
import { useDispatch, useSelector } from "react-redux";

function FruitsList() {
  const fruits = useSelector((state) => state.fruitsReducer.fruits);
  const dispatch = useDispatch();
  const [fruitName, setFruitName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fruitName);

    const newFruit = { id: Date.now(), name: fruitName };
    dispatch(addFruit(newFruit));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="fruit name"
          value={fruitName}
          onChange={(e) => setFruitName(e.target.value)}
        />
        <input type="submit" />
      </form>

      <h2>Fruits List</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitsList;
