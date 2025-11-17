// Task 1:

abstract class Animal {
  abstract makeSound(): string;
}

class Dog extends Animal {
  makeSound(): string {
    return "Bark";
  }
}

class Cat extends Animal {
  makeSound(): string {
    return "Meow";
  }
}

const animals: Animal[] = [new Dog(), new Cat()];

animals.forEach((animal) => {
  console.log(animal.makeSound());
});

// Task 2:

abstract class Shape {
  abstract calculateArea(): number;
}

abstract class ColoredShape extends Shape {
  abstract color: string;
}

class ColoredCircle extends ColoredShape {
  color: string;
  radius: number;

  constructor(color: string, radius: number) {
    super();
    this.color = color;
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class ColoredRectangle extends ColoredShape {
  color: string;
  width: number;
  height: number;

  constructor(color: string, width: number, height: number) {
    super();
    this.color = color;
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

const shapes: ColoredShape[] = [
  new ColoredCircle("красный", 5),
  new ColoredRectangle("синий", 4, 6),
  new ColoredCircle("зелёный", 3),
];

shapes.forEach((shape) => {
  console.log(
    `${shape.color} фигура, площадь: ${shape.calculateArea().toFixed(2)}`
  );
});

// Task 3:

abstract class Appliance {
  abstract turnOn(): void;
  abstract turnOff(): void;
}

class WashingMachine extends Appliance {
  turnOn(): void {
    console.log(`Стиральная машина включена`);
  }

  turnOff(): void {
    console.log(`Стиральная машина выключена`);
  }
}

class Refrigerator extends Appliance {
  turnOn(): void {
    console.log("Холодильник включён");
  }

  turnOff(): void {
    console.log("Холодильник выключен");
  }
}

const appliances: Appliance[] = [new WashingMachine(), new Refrigerator()];

appliances.forEach((appliance) => appliance.turnOn());
appliances.forEach((appliance) => appliance.turnOff());

// Task 4 :

abstract class Account {
  protected balance: number = 0;

  constructor(balance: number = 0) {
    this.balance = balance;
  }

  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;

  getBalance(): number {
    return this.balance;
  }
}

class SavingsAccount extends Account {
  deposit(amount: number): void {
    this.balance += amount + amount * 0.05;
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) this.balance -= amount;
  }
}

class CheckingAccount extends Account {
  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    const total = amount + 2;
    if (total <= this.balance) this.balance -= total;
  }
}

const savings = new SavingsAccount(100);
savings.deposit(100);
savings.withdraw(50);

const checking = new CheckingAccount(100);
checking.deposit(50);
checking.withdraw(50);

console.log(savings.getBalance());
console.log(checking.getBalance());

// Task 5:

abstract class Media {
  abstract play(): void;
}

class Audio extends Media {
  play(): void {
    console.log("Playing audio");
  }
}

class Video extends Media {
  play(): void {
    console.log("Playing video");
  }
}

const mediaItems: Media[] = [new Audio(), new Video(), new Audio()];

mediaItems.forEach((item) => item.play());
