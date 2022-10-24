import { deleteBook } from './deleteBook.js';
import { removeBook } from './removebook.js';
// Function to perform the following actions:
/*
  1: Delete book to the dynamic elements
  2: Delete book to the array of book
  3: Delete book to the local storage
  */

// Function to remove books when 'remove" button clicked
const removeButton = () => {
  const container = document.querySelector('.book-container');
  container.addEventListener('click', (e) => {
    // delete elements from screen
    deleteBook(Number(e.target.id));
    // remove book from local storage
    removeBook(e.target);
    document.location.reload();
  });
};

// eslint-disable-next-line import/prefer-default-export
export { removeButton };
