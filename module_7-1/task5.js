// 5 - Вставка элементов через insertBefore
// Дан элемент ul, а в нем li #elem. 
// Вставьте перед элементом #elem новую li с текстом '!!!'.

const listRef = document.querySelector('.list');
const elemRef = document.querySelector('#elem');

const newLiRef = document.createElement('li');
newLiRef.textContent = '!!!';

listRef.insertBefore(newLiRef, elemRef);

