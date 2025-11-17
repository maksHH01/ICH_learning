// task 1 :

// type Admin = {
//   name: string;
//   permissions: string[];
// };

// type User = {
//   name: string;
//   email: string;
// };

// type AdminUser = Admin & User;

// const adminUser: AdminUser = {
//   name: "Maksym",
//   email: "maksym@example.com",
//   permissions: ["hello", "world", "!!!"],
// };

// console.log(adminUser);

// task 2 :

// type Car = {
//   make: string;
//   model: string;
//   year?: number;
//   engine: {
//     type: string;
//     horsepower: number;
//   };
// };

// const myCar: Car = {
//   make: "Toyota",
//   model: "Supra",
//   year: 2020,
//   engine: {
//     type: "Petrol",
//     horsepower: 335,
//   },
// };

// function printCarInfo(car: Car): void {
//   console.log(`Марка: ${car.make}`);
//   console.log(`Модель: ${car.model}`);
//   if (car.year) {
//     console.log(`Год выпуска: ${car.year}`);
//   } else {
//     console.log("Год выпуска: не указан");
//   }
//   console.log(`Двигатель: ${car.engine.type}, ${car.engine.horsepower} л.с.`);
// }

// printCarInfo(myCar);

// task 3 :

// interface Product {
//   name: string;
//   price: number;
// }

// function calculateDiscount(product: Product, discount: number): number {
//   return product.price - (product.price * discount) / 100;
// }

// const product: Product = { name: "Phone", price: 800 };
// const newPrice = calculateDiscount(product, 10);

// console.log(`Цена со скидкой: ${newPrice}`);

// task 4 :

// interface Employee {
//   name: string;
//   salary: number;
// }

// const employees: Employee[] = [
//   { name: "Maksym", salary: 5000 },
//   { name: "Anna", salary: 6000 },
//   { name: "Ivan", salary: 5500 },
// ];

// function getSalaries(employeeList: Employee[]): number[] {
//   return employeeList.map((employee) => employee.salary);
// }

// const salaries = getSalaries(employees);
// console.log(salaries);

// task 5 :

// interface Person {
//   firstName: string;
//   lastName: string;
// }

// interface Student extends Person {
//   grade: number;
// }

// const student: Student = {
//   firstName: "James",
//   lastName: "Bond",
//   grade: 95,
// };

// function printStudentInfo(student: Student): void {
//   console.log(`Студент: ${student.firstName} ${student.lastName}`);
//   console.log(`Оценка: ${student.grade}`);
// }

// printStudentInfo(student);

// task 6 :

interface ConcatStrings {
  (str1: string, str2: string): string;
}

const concatStrings: ConcatStrings = (str1, str2) => {
  return str1 + str2;
};

const result = concatStrings("Hello ", "James!");
console.log(result);
