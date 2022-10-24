import { clearFields } from './clear-field.js';

class BookListApp {
  constructor() {
    this.bookList = [];
    this.container = document.querySelector('.book-container');
  }

  addBookToList(book) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>"${book.title}" by ${book.author}</td>
      <td><button class= "remove-btn" id=${book.Id}>Remove</button></td>
      `;
    this.container.append(row);
  }

  // Function to perform the following action:
  /*
1: Add book to the dynamic elements
2: Add book to the array of book
3: Add book to the local storage
*/
  AppendBook() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.querySelector('.title').value;
      const author = document.querySelector('.author').value;
      const Id = this.bookList.length;
      this.addBookToList({ title, author, Id });
      this.bookList.push({ title, author, Id });
      localStorage.setItem('books', JSON.stringify(this.bookList));
      clearFields();
    });
  }

  // get book from local storage
  displayBooks() {
    const books = JSON.parse(localStorage.getItem('books'));
    books.forEach((book) => this.addBookToList(book));
  }
}
// eslint-disable-next-line import/prefer-default-export
export { BookListApp };
