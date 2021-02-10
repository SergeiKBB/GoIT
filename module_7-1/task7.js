// 7 - Потомки
// Дан элемент #elem. 
// Найдите первого потомка этого элемента 
// и сделайте его текст красного цвета.
// Найдите последнего потомка этого элемента
// и сделайте его текст синего цвета.
// Найдите всех потомков этого элемента и добавьте им в конец текст '!'.

const parentRef = document.querySelector('#elem');
parentRef.style.fontSize = '24px';

const firstChildRef = parentRef.firstElementChild;
firstChildRef.style.color = 'red';

const lastChildRef = parentRef.lastElementChild;
lastChildRef.style.color = 'blue';

const childrenRef = parentRef.children;

[...childrenRef].forEach(item => {
    item.textContent = item.textContent + '!';
})