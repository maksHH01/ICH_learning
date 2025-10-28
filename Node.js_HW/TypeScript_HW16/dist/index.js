// function division(a: number, b: number): number {
//   return a / b;
// }
// console.log(division(10, 2));
// console.log(division("10", 2));
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
const numbers = [2, 4, 6, 8];
function calculateSum(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
console.log(calculateSum(numbers));
export {};
//# sourceMappingURL=index.js.map