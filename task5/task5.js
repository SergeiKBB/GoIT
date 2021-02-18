// 5 - Туду лист.
// Инпут, куда вводится текст.
// При нажатии на ентер, в список ниже,
// добавляется тудушка. При клике на нее,
// она становится выполненной, т.е. текст зачеркивается

const todos = [
    {
        id: 1,
        text: 'Go to GoIT',
        isDone: false,
        isRemoved: false,
    },
    {
        id: 2,
        text: 'Go to the shop',
        isDone: false,
        isRemoved: true
    },
    {
        id: 3,
        text: 'Watch TV',
        isDone: true,
        isRemoved: false,
    }
]

const todosFormRef = document.querySelector('.js-todos-form');
const todosFormInputRef = document.querySelector('.js-todos-form-input');
const todoItemRef = document.querySelector('.js-todo-item');
const todoItemsWrapperRef = document.querySelector('.todo-items-wrapper');

let todoItemText;

todosFormRef.addEventListener('submit', event => {
    event.preventDefault();
    const newTodoItem = createTodoItem({
        id: new Date(),
        text: todosFormInputRef.value,
        isDone: false,
        isRemoved: false
    });
    todoItemsWrapperRef.insertAdjacentHTML('afterbegin', newTodoItem);
});

const todoItemsStr = todos.map(createTodoItem).join('');

todoItemsWrapperRef.innerHTML = todoItemsStr;


// function createTodoItem(todo) {
//     const liRef = document.createElement('li');
//     const formRef = document.createElement('form');
//     const divRef = document.createElement('div');
//     const inputRef = document.createElement('input');
//     const labelRef = document.createElement('label');
//     const buttonRef = document.createElement('button');
//
//     liRef.className = 'list-group-item js-todo-item';
//     formRef.className = 'd-flex justify-content-between';
//     divRef.className = 'form-check';
//
//     inputRef.className = 'form-check-input';
//     inputRef.type = 'checkbox';
//     inputRef.id = 'todoItemCheckbox';
//
//     labelRef.className = 'form-check-label';
//     labelRef.htmlFor = 'todoItemCheckbox';
//     labelRef.textContent = todo.text;
//
//     buttonRef.className = 'btn btn-link p-0';
//     buttonRef.textContent = 'Remove';
//
//     divRef.append(inputRef, labelRef);
//     formRef.append(divRef, buttonRef);
//     liRef.append(formRef);
//
//     return liRef;
// }


function createTodoItem(todo) {
    return `
    <li class="list-group-item js-todo-item ${todo.isRemoved ? 'd-none' : ''}">
        <form class="d-flex justify-content-between">
            <div class="form-check">
                <input type="checkbox" id="todoItemCheckbox" class="form-check-input" ${todo.isDone ? "checked=checked" : ''}>
                <label for="todoItemCheckbox" class="form-check-label ${todo.isDone ? 'text-decoration-line-through' : '' }">${todo.text}</label>
            </div>
            <button class="btn btn-link p-0">Remove</button>
        </form>
    </li>
    `
}