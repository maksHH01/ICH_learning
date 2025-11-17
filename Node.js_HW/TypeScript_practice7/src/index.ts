// // Task : 1

// const arr: number[] = [2, 5, 6];

// type NumberInfo = {
//   value: number;
//   isEven: boolean;
// };

// const newArr: NumberInfo[] = arr.map(
//   (num): NumberInfo => ({
//     value: num,
//     isEven: true,
//   })
// );

// console.log(newArr);

// // Task 2:

// const dateString: string[] = ["2020-01-01", "2023-05-10"];

// const arrDate = dateString.map((str: string) => new Date(str));

// console.log(arrDate);

// // Task 3:

// type KeyInfos = {
//   key: string;
//   info: string | number;
// };

// const data: [string, string | number][] = [
//   ["id", 1],
//   ["name", "Alice"],
//   ["age", 25],
// ];

// const newDateArr: KeyInfos[] = data.map(
//   ([key, info]): KeyInfos => ({ key, info })
// );

// console.log(newDateArr);

// // Task 4:

// const words: string[] = ["  Hel!lo  ", "***woRld***", "J@@@S   "];

// const newWords = words.map((word: string): string =>
//   word
//     .trim()
//     .toLowerCase()
//     .replace(/[^a-z0-9]/gi, "")
// );

// console.log(newWords);

// // Task 5:

// type User = {
//   first: string;
//   last: string;
//   age: number;
//   password: string;
// };

// const users: User[] = [
//   { first: "John", last: "Doe", age: 30, password: "12345" },
//   { first: "Jane", last: "Smith", age: 25, password: "qwerty" },
// ];

// const newUser = users.map((user) => ({
//   fullName: `${user.first} ${user.last}`,
//   age: user.age,
// }));

// console.log(newUser);

// Task 6:

const arr: number[] = [1, 2, 2, 3, 4, 4, 5];

const numbersArray: number[] = arr.filter(
  (num: number, index: number, arr: number[]): boolean =>
    arr.indexOf(num) === index // Что возвращает массив?
);
console.log(arr.indexOf(2));
console.log(numbersArray);

// Task 7:

type User = {
  name: string;
  orders: number[];
};

const users: User[] = [
  { name: "Alice", orders: [50, 120, 30] },
  { name: "Bob", orders: [20, 40] },
  { name: "Charlie", orders: [200, 10] },
];

const filteredUsers: User[] = users.filter((user) => {
  const highersOrder = [...user.orders].sort((a, b) => a - b).pop();
  return (highersOrder as number) >= 100;
});

console.log(filteredUsers);

// Task 8 :

const words: string[] = ["level", "world", "radar", "hello", "madam"];

const polidromWord: string[] = words.filter(
  (word) => word === word.split("").reverse().join("")
);

// task 9

// const arr1: string[] = ["a", "b", "a", "c", "b", "a"];

// const countLetters = arr.reduce((acc: number, el: string) => {

//   return acc;
// }, {});

// console.log(countLetters);

// task 10:

const sumOrders: number = users.reduce(
  (acc, user) => acc + user.orders.reduce((sum, order) => sum + order, 0),
  0
);

console.log(sumOrders);
