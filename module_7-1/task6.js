// 6 - Создание элементов
// Дан массив. Создайте ul через createElement, 
// затем вставьте каждый элемент этого массива в отдельную li внутри этой ul, 
// затем вставьте эту ul в конец body.
const arr = ['Minsk', 'Kyiv', 'NewYork'];

const newUlRef =  document.createElement('ul');

const listOfLiRef = arr.map(city => {
    const liRef = document.createElement('li');
    liRef.textContent = city;
    return liRef;
})

newUlRef.append(...listOfLiRef);

document.getElementById('root').append(newUlRef);