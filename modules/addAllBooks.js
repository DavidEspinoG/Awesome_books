/* eslint-disable import/no-cycle */
import colection from './Books.js';
import { list } from './selectors.js';
import addingBookToHtml from './addingBoookToHtml.js';

function addAllBooks() {
  list.innerHTML = '';
  colection.books.forEach((book, index) => {
    addingBookToHtml(book.title, book.author, index);
  });
}

export default addAllBooks;