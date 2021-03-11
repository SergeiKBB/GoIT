import todosTemplate from './templates/todos.hbs';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const addItemFormRef = document.querySelector('.js-todos-form');
const addItemInputRef = document.querySelector('.js-todos-form-input');
const todosRef = document.querySelector('.js-todo-list-ref');
const todosWrapperRef = document.querySelector('.js-todos-wrapper');


addItemFormRef.addEventListener('submit', e => {
  e.preventDefault();
  const text = addItemInputRef.value;

  store.addItem(text);
  addItemInputRef.value = '';
  renderAllTodos();
});

todosWrapperRef.addEventListener('click', e => {
  e.preventDefault();
  if(e.target.tagName === 'BUTTON') {
    const id = e.target.dataset.id;
    store.updateItem(id, { isRemoved: true });
    renderAllTodos();
  }
  if (e.target.tagName === 'INPUT') {
    const id = e.target.dataset.id;
    const isDone = e.target.checked;
    store.updateItem(id, { isDone });
    renderAllTodos();
  }
});

renderAllTodos();

function renderAllTodos() {
  const todos = store.getAllItems();
  todosRef.innerHTML = todosTemplate({todos});
}
