// Пример 2 - Стили
// Дан элемент #elem. 
// Сделайте его красного цвета
// Сделайте его размером 30px
// добавьте ему границу
// Решите задачу с помощью свойства cssText.

const divRef = document.querySelector('#elem');

// divRef.style.color = 'red';
// divRef.style.backgroundColor = 'green';
// divRef.style.width = '100px';
// divRef.style.height = '100px';
// divRef.style.border = '5px solid yellow';

console.dir(divRef);

// divRef.style.cssText = 'color: red; background-color: green; width: 100px; height: 100px; border: 5px solid yellow;'