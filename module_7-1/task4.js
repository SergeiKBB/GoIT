// 4 - Вставка элементов через appendChild
// Дан ol. Вставьте ему в конец li с текстом 'пункт'.
// Дан ul. Дан массив.
// Вставьте элементы этого массива в конец ul так, 
// чтобы каждый элемент стоял в своем li.

// const olRef = document.querySelector('.list');
// const liRef = document.createElement('li');
//
// liRef.textContent = 'пункт';
//
// olRef.appendChild(liRef);

const laptops = ['hp', 'asus', 'macbook'];

const ulRef = document.querySelector('.list');

const items = laptops.map(laptop => {
    const liRef = document.createElement('li');
    liRef.textContent = laptop;
    return liRef;
})

ulRef.append(...items);