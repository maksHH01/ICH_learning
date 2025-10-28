// Task 2

// function division(a: number, b: number): number {
//   return a / b;
// }

// console.log(division(10, 2));
// console.log(division("10", 2));

// Task 3

// interface Car {
//   make: string;
//   model: string;
//   year: number;
//   isElectric: boolean;
// }

// function printCarInfo(car: Car): void {
//   const type = car.isElectric ? "Electrocar" : "Car with bensine";
//   console.log(`${car.make}, ${car.model}, year : ${car.year}, type: ${type}`);
// }

// const myCar: Car = {
//   make: "Tesla",
//   model: "Model S",
//   year: 2022,
//   isElectric: true,
// };

// printCarInfo(myCar);

// Task 4

// const numbers: number[] = [2, 4, 6, 8];

// function calculateSum(arr: number[]): number {
//   return arr.reduce((acc: number, num: number): number => acc + num, 0);
// }

// console.log(calculateSum(numbers));

// Task 5

// function isAdult(age: number): boolean {
//   return age >= 18;
// }

// console.log(isAdult(19));

// console.log(isAdult(12));

// Task 6

interface Task {
  title: string;
  description: string;
  isComplited: boolean;
}

function getUncomplietedTasks(tasks: Task[]): Task[] {
  return tasks.filter((task) => isCompleted);
}
