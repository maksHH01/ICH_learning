function ShoppingList({ items }) {
  if (items.length === 0) {
    return <p>Список покупок пуст.</p>;
  }
  return (
    <div>
      <h4>Задание 2:</h4>
      <ul>
        {items.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default ShoppingList;
