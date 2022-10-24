const deleteBook = (Id) => {
  const books = JSON.parse(localStorage.getItem('books'));
  books.forEach((book, index) => {
    if (index === Id) {
      books.splice(Id, 1);
    }
  });
  let newId = 0;
  if (books.length > 0) {
    books.forEach((check) => {
      check.Id = newId;
      newId += 1;
    });
  }
  localStorage.setItem('books', JSON.stringify(books));
};

// eslint-disable-next-line import/prefer-default-export
export { deleteBook };
