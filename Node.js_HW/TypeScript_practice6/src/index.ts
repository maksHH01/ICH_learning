// class Car {
//   brand: string;
//   model: string;
//   private year: number;
//   static totalCars: number = 0;

//   constructor(brand: string, model: string, year: number) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     Car.totalCars++;
//   }

//   get fullName(): string {
//     return `${this.brand}, ${this.model}`;
//   }

//   setAge(newYear: number): void {
//     this.year = newYear;
//   }

//   getAge(currentYear: number): number {
//     return currentYear - this.year;
//   }

//   getInfo(): string {
//     return `${this.brand} ${this.model} (${this.year})`;
//   }

//   static getTotalCars(): number {
//     return Car.totalCars;
//   }
// }

// const myCar = new Car("Tesla", "Model S", 2022);

// console.log(Car.getTotalCars());

// console.log(myCar.getInfo());
// console.log(myCar.getAge(2025));

// console.log(myCar.fullName);
// console.log(myCar.getAge(2025));

// myCar.setAge(2015);

// console.log(myCar.getAge(2025));

// class BankAccount {
//   private accountNumber: number;
//   protected balance: number;
//   static bankName = "TypeScript Bank";
//   static accountsCount: number = 0;

//   constructor(accountNumber: number, balance: number = 0) {
//     this.accountNumber = accountNumber;
//     this.balance = balance;

//     BankAccount.accountsCount++;
//   }

//   deposit(amount: number): void {
//     if (amount > 0) {
//       this.balance += amount;
//       console.log(`Added ${amount}. New balance : ${this.balance}`);
//     } else {
//       console.log("summ should be more than 0");
//     }
//   }

//   getBalance(): number {
//     return this.balance;
//   }

//   static getBankInfo() {
//     return `Bank: ${BankAccount.bankName}, accounts: ${BankAccount.accountsCount}`;
//   }
// }

// const myAccount1 = new BankAccount(1111, 200);
// const myAccount2 = new BankAccount(1111, 200);
// const myAccount3 = new BankAccount(1111, 200);

// myAccount1.deposit(100);

// console.log(myAccount1.getBalance());

// console.log(BankAccount.getBankInfo());

// class Account extends BankAccount {
//   private cashbakPercent: number;

//   constructor(
//     accountNumber: number,
//     balance: number = 0,
//     cashbakPercent: number = 1
//   ) {
//     super(accountNumber, balance);
//     this.cashbakPercent = cashbakPercent;
//   }

//   deposit(amount: number): void {
//     if (amount > 0) {
//       const cashback = (amount * this.cashbakPercent) / 100;
//       this.balance += amount + cashback;
//       console.log(`New balance: ${this.balance}`);
//     } else {
//       console.log("summ should be more than 0");
//     }
//   }

//   getCashbackBonus(amount: number): number {
//     return (amount * this.cashbakPercent) / 100;
//   }
// }

// const acc1 = new Account(10, 1000, 20);
// console.log(acc1);
// acc1.deposit(50);
// console.log(acc1.getBalance());
// console.log(acc1.getCashbackBonus(100));

abstract class Shape {
  abstract name: string;

  abstract getArea(): number;

  printArea(): void {
    console.log(`Площадь ${this.name} ${this.getArea()}`);
  }
}

class Circle extends Shape {
  radius: number;
  name: string = "Круг";

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

const circle1 = new Circle(5);
console.log(circle1.printArea());

class Rectangle extends Shape {
  width: number;
  height: number;
  name: string = "Прямоугольник";

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const rectangle1 = new Rectangle(5, 6);
console.log(rectangle1.printArea());

class Triangle extends Shape {
  base: number;
  height: number;
  name: string = "Треугольник";

  constructor(base: number, height: number) {
    super();
    this.base = base;
    this.height = height;
  }

  getArea(): number {
    return (this.base * this.height) / 2;
  }
}

const triangle = new Triangle(3, 8);
triangle.printArea();
