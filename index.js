/* eslint-disable */

// BookListApp class: class to hold books
import { BookListApp } from "./module/addBook.js";
// instantiate class
const books = new BookListApp();
document.addEventListener("DOMContentLoaded", books.callingAllFn());
