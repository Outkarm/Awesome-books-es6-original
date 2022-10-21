// BookListApp class: class to hold books
import { BookListApp } from './module/addBook.js';
// instantiate class
const books = new BookListApp();

books.AppendBook();
books.removeButton();

books.navLinks();
books.getDate();

document.addEventListener('DOMContentLoaded', books.displayBooks());
