/* eslint-disable */

class BookListApp {
  constructor() {
    this.bookList = [];
    this.container = document.querySelector(".book-container");
  }

  addBookToList(book) {
    const row = document.createElement("tr");
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
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.querySelector(".title").value;
      const author = document.querySelector(".author").value;
      const Id = this.bookList.length;
      this.addBookToList({ title, author, Id });
      this.bookList.push({ title, author, Id });
      localStorage.setItem("books", JSON.stringify(this.bookList));
      this.clearFields();
    });
  }

  // get book from local storage
  displayBooks() {
    const books = JSON.parse(localStorage.getItem("books"));
    books.forEach((book) => this.addBookToList(book));
  }

  // Function to perform the following actions:
  /*
  1: Delete book to the dynamic elements
  2: Delete book to the array of book
  3: Delete book to the local storage
  */

  // Clear form input's values

  clearFields() {
    document.querySelector(".title").value = "";
    document.querySelector(".author").value = "";
  }

  deleteBook(Id) {
    const books = JSON.parse(localStorage.getItem("books"));
    books.forEach((book, index) => {
      if (index === Id) {
        books.splice(index, 1);
      }
    });
    books.map((item) => {
      item.Id = books.length - 1;
    });
    localStorage.setItem("books", JSON.stringify(books));
  }

  // function to remove book
  removeBook(el) {
    if (el.classList.contains("remove-btn")) {
      el.parentElement.parentElement.remove();
    }
  }

  // Function to remove books when 'remove" button clicked
  removeButton() {
    const container = document.querySelector(".book-container");
    container.addEventListener("click", (e) => {
      // delete elements from screen
      this.deleteBook(Number(e.target.id));
      // remove book from local storage
      this.removeBook(e.target);
    });
  }

  // Function to handle datetime
  getDate() {
    const time = document.querySelector(".time");
    const date = new Date();
    const now = date.toString().split(" ").splice(1, 4);
    let pe;
    if (date.getHours() >= 12) {
      pe = "pm";
    } else {
      pe = "am";
    }
    const mon = `${now[0]} ${now[1]}th ${now[2]}, ${now[3]} ${pe}`;
    time.innerHTML = mon;
  }

  navLinks() {
    // Switching Through Sections
    const allSections = document.querySelectorAll(".sections");
    const listCont = document.querySelector(".nav-items");
    listCont.addEventListener("click", (e) => {
      e.preventDefault();
      const { id } = e.target.dataset;
      if (id) {
        // Removing the active section
        allSections.forEach((section) => {
          section.classList.remove("activesec");
        });
        //  Adding the active section
        const targetedSec = document.getElementById(id);
        targetedSec.classList.add("activesec");
      }
    });
  }
}
export { BookListApp };
