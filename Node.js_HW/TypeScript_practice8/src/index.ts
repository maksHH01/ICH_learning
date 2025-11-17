// Task 1:

// namespace Counter {
//   let count: number = 0;

//   export function increment() {
//     count++;
//   }

//   export function decrement() {
//     count--;
//   }

//   export function getValue() {
//     return count;
//   }
// }

// Counter.increment();

// console.log(Counter.getValue());

// Task 2:

namespace Library {
  export class Book {
    title: string;
    author: string;

    constructor(title: string, author: string) {
      this.title = title;
      this.author = author;
    }
    getInfo(): string {
      return `"${this.title}" by  ${this.author}`;
    }
  }

  export class LibraryManager {
    private books: Book[] = [];

    addBook(book: Book) {
      this.books.push(book);
    }

    showAll() {
      this.books.forEach((book) => console.log(book.getInfo()));
    }
  }
}

const libraryManager1 = new Library.LibraryManager();

const book1 = new Library.Book("Harry Potter", "Joahn Rowling");

libraryManager1.addBook(book1);

libraryManager1.showAll();
