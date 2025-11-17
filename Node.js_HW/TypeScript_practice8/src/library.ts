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

libraryManager1.showAll();
