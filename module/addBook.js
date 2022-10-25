import { clearFields } from './clear-field.js';

const addBookToList = (book) => {
  const container = document.querySelector('.book-container');
  const row = document.createElement('tr');
  row.innerHTML = `
      <td>"${book.title}" by ${book.author}</td>
      <td><button class= "remove-btn" id=${book.Id}>Remove</button></td>
      `;
  container.append(row);
};

const appendBook = () => {
  const bookList = [];
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const Id = bookList.length;
    addBookToList({ title, author, Id });
    bookList.push({ title, author, Id });
    localStorage.setItem('books', JSON.stringify(bookList));
    clearFields();
  });
};

const displayBooks = () => {
  const books = JSON.parse(localStorage.getItem('books'));
  books.forEach((book) => addBookToList(book));
};

// eslint-disable-next-line import/prefer-default-export
export { appendBook, displayBooks };
