// function multiply(num1: number, num2: number): number {
//   return num1 * num2;
// }

// console.log(multiply(2, 3));

// Task 2 :

// function greet(name: string, greeting?: string): void {
//   const greetingMessage = greeting || "Hello";
//   console.log(`${greetingMessage}, ${name}`);
// }

// greet("Max"); //  Good Morning , Max
// greet("Max", "Good Morning"); // Hello, Max

// Task 3:

// const filterEvenNumbers = (numbers: number[]): number[] => {
//   return numbers.filter((num) => num % 2 === 0);
// };

// console.log(filterEvenNumbers([10, 5, 6, 8, 1,]));

// Task 4:

// function reverseArray<T>(array: T[]): T[] {
//   return array.reverse();
// }

// console.log(reverseArray<number>([5, 6, 7])); // [5,6,7] = [7,6,5]
// console.log(reverseArray<string>(["a", "b", "c"])); // ["a", "b", "c"] = ["c", "b","a"]

// Task 6 :

// function claculateDiscount(price: number, discountRate: number = 0.1): number {
//   const discount: number = price - price * discountRate;
//   return discount;
// }

// console.log(claculateDiscount(100));
// console.log(claculateDiscount(100, 0.5));

// Task 7 :

// interface PersonName {
//   name: string;
// }

// interface PersonAge {
//   age: number;
// }

// function mergeObjects<T extends object, V extends object>(
//   obj1: T,
//   obj2: V
// ): T & V {
//   return { ...obj1, ...obj2 };
// }

// console.log(
//   mergeObjects<PersonName, PersonAge>({ name: "Bohdan" }, { age: 30 })
// ); // {name:"Bohdan", age: 30}

// Task 7 :
