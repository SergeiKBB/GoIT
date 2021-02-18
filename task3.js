// Пример 3 - Поле
// Сделайте поле из белых клеточек 4x4
// При клике на клеточку она должна менять цвет 
// с белого на черный,
// с черного на белый 
// Под таблицей должна быть кнопка «поменять цвета». 
// При ее нажатии все цвета клеточек меняются 
// на противоположные.

const parentRef = document.querySelector('.parent');
const reverseBtnRef = document.querySelector('.reverse');

parentRef.addEventListener('click', event => {
    if (event.target !== parentRef) {
        event.target.classList.toggle('block_active')
    }
});

reverseBtnRef.addEventListener('click', event => {
    [...parentRef.children].forEach(itemRef => {
        itemRef.classList.toggle('block_active');
    });
});