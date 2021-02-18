// Пример 2 - Вывести 4  квадрата,
// при клике на любой, он становиться зеленым, 
// при этом если есть уже зеленый квадрат, 
// то он становиться обратно белым и так можно кликать на любой квадрат,
// он становиться зеленым, а старый зеленый квадрат обратно белым и тд.

// const blockRefs = document.querySelectorAll('.block');
//
// console.log(blockRefs);
//
// blockRefs.forEach(blockRef => {
//     blockRef.addEventListener('click', event => {
//         const activeElement = document.querySelector('.block_active');
//         if (activeElement) {
//             activeElement.classList.remove('block_active');
//         }
//
//         event.target.classList.add('block_active');
//     });
// });

const parentRef = document.querySelector('.parent');

parentRef.addEventListener('click', event => {
    if(event.target !== parentRef) {
        const activeElement = document.querySelector('.block_active');
        if (activeElement) {
            activeElement.classList.remove('block_active');
        }
        event.target.classList.toggle('block_active')
    }
})