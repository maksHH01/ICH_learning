import "./App.css";
import Greeting from "./components/Greeting";
import OrderStatus from "./components/OrderStatus";
import ShoppingList from "./components/ShoppingList";

function App() {
  let mainName = "Max";

  let list = ["Яблоко", "Груша", "Апельсин"];

  let orders = [{ orderId: 123, status: "в пути" }];

  return (
    <>
      <Greeting name={mainName} />
      <ShoppingList items={list} />
      <OrderStatus orderId={orders[0].orderId} status={orders[0].status} />
    </>
  );
}

export default App;
