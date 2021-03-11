import { v4 } from 'uuid';
/* item {
*   id: number,
*   text: string,
*   isDone: boolean,
*   isRemoved: boolean,
*   isTodo: boolean
* }
* */

function addItem(text) {
  const todo = {
    id: v4(),
    text,
    isDone: false,
    isRemoved: false,
    isTodo: true,
    date: Date.now()
  };
  localStorage.setItem(todo.id, JSON.stringify(todo));
  return todo;
}

function getItemById(id) {
  const item = localStorage.getItem(id);
  return JSON.parse(item);
}

function getAllItems() {
  const values = Object.values(localStorage)
    .filter(value => value.indexOf('{') === 0)
    .map(item => JSON.parse(item))
    .filter(item => item.isTodo && !item.isRemoved);
  return values;
}

function updateItem(id, values) {
  const item = getItemById(id);
  localStorage.setItem(item.id, JSON.stringify({...item, ...values}));
  return item;
}

function removeItem(id) {
  const item = getItemById(id);
  localStorage.removeItem(id)

  return item;
};


export default {
  addItem,
  getItemById,
  getAllItems,
  updateItem,
  removeItem
}
