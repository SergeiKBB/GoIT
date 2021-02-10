// 1 - Классы
// Дан элемент #elem. 
// Добавьте ему класс www.
// Удалите у него класс www.
// Проверьте наличие у него класса www.
// Добавьте ему класс www, если его нет и удалите - если есть.
// Узнайте количество его классов.
// Выведите последовательно алертом его классы.

const pRef = document.querySelector('#elem');

pRef.classList.add('www');
pRef.classList.add('wsdfww');
pRef.classList.add('wwsdfsdw');
// pRef.classList.remove('www');
// console.log(pRef.classList.contains('www'));
// pRef.classList.toggle('www')
// console.log(pRef.classList.contains('www'));
// pRef.classList.toggle('www')
// console.log(pRef.classList.contains('www'));
//
// console.log(pRef.classList.length);

const { classList } = pRef;

// for (let item of classList) {
//     console.log(item);
// }

classList.forEach(item => console.log(item))


// console.log(pRef);