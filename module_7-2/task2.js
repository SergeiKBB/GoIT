// Пример 2 - Попап
// Дан простой скрытый попап.
// При нажатии на кнопку, показать попап,
// при нажатии на ESC скрыть

const popupRef = document.querySelector('.js-popup');
const openBtnRef = document.querySelector('.js-open-popup-btn');

openBtnRef.addEventListener('click', event => {
    popupRef.classList.add('popup_open');
    window.addEventListener('keydown', handleHidePopup);
});

function handleHidePopup(event) {
        if(event.code === 'Escape') {
            popupRef.classList.remove('popup_open')
            window.removeEventListener('keydown', handleHidePopup);
        }
        console.log('handleHidePopup')
}