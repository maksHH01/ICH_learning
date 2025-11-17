// Task 1 :

class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  sound(): void {
    console.log(`The animal makes sound`);
  }
}

class Dog extends Animal {
  breed: string;
  constructor(name: string, species: string = "Dog", breed: string) {
    super(name, species);
    this.breed = breed;
  }

  sound(): void {
    console.log("the dog barks");
  }
}

const animal1 = new Animal("Bob", "Labrador");
animal1.sound();

const dog1 = new Dog("Lord", "Dog", "German Shepherd");
dog1.sound();

// Task 2 :

class Library {
  static totalBooks: number = 0;
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  addBook(): void {
    Library.totalBooks++;
    console.log(
      `Книга ${this.name} добавлена.Всего книг : ${Library.totalBooks}`
    );
  }
}

const lib1 = new Library("School Library");
const lib2 = new Library("City Library");

lib1.addBook();
lib2.addBook();
lib1.addBook();
lib2.addBook();

console.log(Library.totalBooks);

// Task 3 :

class Vehicle {
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}

class Motorcycle extends Vehicle {
  type: string;

  constructor(make: string, model: string, type: string) {
    super(make, model);
    this.type = type;
  }
}

const bike = new Motorcycle("Yamaha", "1", "Sport");

console.log(bike.make);
console.log(bike.model);
console.log(bike.type);
