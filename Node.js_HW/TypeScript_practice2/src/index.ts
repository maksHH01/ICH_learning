// interface Car {
//   brand: string;
//   model: string;
//   year: number;
//   isElectric: boolean;
// }

import { error } from "console";

// const car: Car = {
//   brand: "Tesla",
//   model: "Model S",
//   year: 2023,
//   isElectric: true,
// };

// const describeCar = ({ brand, model, year, isElectric }: Car): string => {
//   const electric: string = isElectric ? "Yes" : "No";
//   return `${brand} ${model} (${year}), Electric: ${electric}`;
// };

// console.log(describeCar(car));

// Task 2 :

// const scores: number[] = [1, 2, 3, 4, 5];

// const calcAverageScore = (scores: number[]): number => {
//   const sum: number = scores.reduce(
//     (acc: number, el: number): number => acc + el,
//     0
//   );
//   const result = sum / scores.length;
//   return Number(result.toFixed(1));
// };

// console.log(calcAverageScore(scores));

// Task 3 :

// type PersonInfo = [string, number];

// function prontPersonInfo([name, age]: PersonInfo): void {
//   console.log(`Name: ${name}, Age: ${age}`);
// }

// console.log(prontPersonInfo(["Max", 26]));

// Task 4:

// interface Product {
//   name: string;
//   price: number;
//   isStock: boolean;
// }

// const products: Product[] = [
//   {
//     name: "Apple",
//     price: 3,
//     isStock: true,
//   },
//   { name: "Orange", price: 2, isStock: true },
// ];

// const listAvailableProducts = (arr: Product[]): void => {
//   const result = arr.filter((item: Product): boolean => item.isStock);
//   console.log(result);
// };

// listAvailableProducts(products);

// Task 5:

// let data: unknown;

// function processData(data: unknown): number | null {
//   if (typeof data === "string") {
//     return data.length;
//   } else if (typeof data === "number") {
//     return data * data;
//   } else {
//     return null;
//   }
// }

// console.log(processData("Hello World"));
// console.log(processData(2));
// console.log(processData(null));

// Task 6:

const logMessage = (message: string): void => {
  console.log(message);
};

function throwError(errorMessage: string): never {
  throw Error(errorMessage);
}

throwError("bye");

logMessage("Hallo");

console.log();
