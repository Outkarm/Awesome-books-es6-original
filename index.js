// BookListApp class: class to hold books
import { appendBook, displayBooks } from "./module/addBook.js";
import { getDate } from "./module/time-and-date.js";
import { navLinks } from "./module/navbar-switch.js";
import { removeButton } from "./module/total-delete-book.js";

// instantiate class

appendBook();

removeButton();

navLinks();
getDate();

document.addEventListener("DOMContentLoaded", displayBooks());
