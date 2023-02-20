/* eslint-disable import/no-cycle */
import colection from './Books.js';
import addAllBooks from './addAllBooks.js';
import { list } from './selectors.js';

const addingBookToHtml = (Title, Author, index) => {
  const div = document.createElement('div');
  div.className = 'listItem';
  div.setAttribute('id', index);
  const p = document.createElement('p');
  p.innerHTML = `"${Title}" by ${Author}`;
  p.className = 'description';
  const button = document.createElement('button');
  button.innerHTML = 'Remove';
  button.className = 'RemoveButton';
  button.setAttribute('id', 'removeButton');
  button.addEventListener('click', ((e) => {
    const parent = e.target.parentElement;
    const index = parent.id;
    colection.remove(index);
    addAllBooks();
    localStorage.books = JSON.stringify(colection.books);
    if (colection.books.length === 0) {
      list.style.border = 'none';
    }
  }));
  div.appendChild(p);
  div.appendChild(button);
  list.appendChild(div);
};

export default addingBookToHtml;