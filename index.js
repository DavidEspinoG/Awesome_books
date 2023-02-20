import {
  form,
  title,
  author,
  list,
  bookList,
  addNewForm,
  contactForm,
  listLink,
  addNewLink,
  contactLink,
} from './modules/selectors.js';
import addAllBooks from './modules/addAllBooks.js';
import colection from './modules/Books.js';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  colection.add(title.value, author.value);
  addAllBooks();
  list.style.border = '2px solid black';
  title.value = '';
  author.value = '';
  localStorage.books = JSON.stringify(colection.books);
});

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.books) {
    colection.books = JSON.parse(localStorage.books);
  }
  if (colection.books.length === 0) {
    list.style.border = 'none';
  } else {
    list.style.border = '2px solid black';
  }
  addAllBooks();
});

// SPA Navigation
listLink.addEventListener('click', () => {
  bookList.classList.remove('display-none');
  addNewForm.classList.add('display-none');
  contactForm.classList.add('display-none');
});
addNewLink.addEventListener('click', () => {
  bookList.classList.add('display-none');
  addNewForm.classList.remove('display-none');
  contactForm.classList.add('display-none');
});
contactLink.addEventListener('click', () => {
  bookList.classList.add('display-none');
  addNewForm.classList.add('display-none');
  contactForm.classList.remove('display-none');
});