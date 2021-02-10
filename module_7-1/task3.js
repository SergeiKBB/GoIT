// Пример 3 - Свойство tagName
// Дан элемент #elem. 
// Выведите название его тега.
// Выведите название его тега в нижнем регистре.
// Даны элементы с классом www.
// в конец  каждого элемента добавить название его тега в нижнем регистре.

const divRef = document.querySelector('#elem');
const pListRef = document.querySelectorAll('.www');

// console.log(divRef.tagName);
// console.log(divRef.tagName.toLo/werCase());

pListRef.forEach(item => {
    item.append(item.tagName.toLowerCase())
})