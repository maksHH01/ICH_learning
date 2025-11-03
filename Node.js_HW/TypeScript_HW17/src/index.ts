// Task 1 :

// function calculateTotal(
//   price: number,
//   quantity: number,
//   discount: number = 0
// ): number {
//   const total = price * quantity;
//   const discountTotal = total - total * (discount / 100);
//   return discountTotal;
// }

// console.log(calculateTotal(100, 2));
// console.log(calculateTotal(100, 2, 10));

// Task 2 :

// let id: string | number;

// function displayId(id: string | number): void {
//   if (typeof id === "string") {
//     console.log("ID:", id.toUpperCase());
//   } else {
//     console.log("ID:", id * 10);
//   }
// }

// id = "user42";

// console.log(displayId(id));

// Task 3 :

// type OrderStatus = "pending" | "shipped" | "delivered";

// type Order = {
//   orderId: string;
//   amount: number;
//   status: OrderStatus;
// };

// const orders: Order[] = [
//   { orderId: "A101", amount: 150, status: "pending" },
//   { orderId: "A102", amount: 250, status: "shipped" },
//   { orderId: "A103", amount: 350, status: "delivered" },
//   { orderId: "A104", amount: 400, status: "pending" },
// ];

// function filterOrdersByStatus(orders: Order[], status: OrderStatus): Order[] {
//   return orders.filter((order) => order.status === status);
// }

// console.log(filterOrdersByStatus(orders, "pending"));
// console.log(filterOrdersByStatus(orders, "shipped"));

// Task 4 :

let productInfo: [string, number, number] = ["Phone", 500, 3];

function updateStock(
  inventory: { [key: string]: number },
  productInfo: [string, number, number]
) {
  const name = productInfo[0];
  const price = productInfo[1];
  const quantity = productInfo[2];

  if (inventory[name]) {
    inventory[name] = inventory[name] + quantity;
  } else {
    inventory[name] = quantity;
  }

  return inventory;
}

let inventory = {
  Laptop: 5,
  Tablet: 2,
};

console.log(updateStock(inventory, ["Laptop", 1000, 3]));

console.log(updateStock(inventory, ["Phone", 600, 5]));
