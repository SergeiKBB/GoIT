// 5 - Туду лист.
// Инпут, куда вводится текст.
// При нажатии на ентер, в список ниже,
// добавляется тудушка. При клике на нее,
// она становится выполненной, т.е. текст зачеркивается

const todos = [
    {
        id: 1,
        text: 'Go to GoIT',
        isDone: false
    },
    {
        id: 2,
        text: 'Go to the shop',
        isDone: false
    },
    {
        id: 3,
        text: 'Watch TV',
        isDone: true
    }
]

const todosFormRef = document.querySelector('.js-todos-form');
const todosFormInputRef = document.querySelector('.js-todos-form-input');
const todoItemRef = document.querySelector('.js-todo-item');
const todoItemsWrapperRef = document.querySelector('.todo-items-wrapper');

let todoItemText;

todosFormRef.addEventListener('submit', event => {
    event.preventDefault();
    todoItemText = todosFormInputRef.value;
    console.log(todoItemText);
})

const todoItems = todos.map(createTodoItem);

todoItemsWrapperRef.append(...todoItems)


function createTodoItem(todo) {
    const liRef = document.createElement('li');
    const formRef = document.createElement('form');
    const divRef = document.createElement('div');
    const inputRef = document.createElement('input');
    const labelRef = document.createElement('label');
    const buttonRef = document.createElement('button');

    liRef.className = 'list-group-item js-todo-item';
    formRef.className = 'd-flex justify-content-between';
    divRef.className = 'form-check';

    inputRef.className = 'form-check-input';
    inputRef.type = 'checkbox';
    inputRef.id = 'todoItemCheckbox';

    labelRef.className = 'form-check-label';
    labelRef.htmlFor = 'todoItemCheckbox';
    labelRef.textContent = todo.text;

    buttonRef.className = 'btn btn-link p-0';
    buttonRef.textContent = 'Remove';

    divRef.append(inputRef, labelRef);
    formRef.append(divRef, buttonRef);
    liRef.append(formRef);

    return liRef;
}
