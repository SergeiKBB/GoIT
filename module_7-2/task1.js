// 1 - Фокус
// Есть инпут. При потере фокуса,
// проверяем его, и если он пустой,
// красим границу в красный цвет!

const inputFirstRef = document.querySelector('.js-input-first');
const inputSecondRef = document.querySelector('.js-input-second');

inputFirstRef.addEventListener('blur', handleBlur);

function handleBlur(event) {
    if(!event.target.value) {
        event.target.style.borderColor = 'red'
    } else {
        event.target.style.borderColor = '';
        console.log('handleBluer else')
    }
}
// console.dir(inputRef)