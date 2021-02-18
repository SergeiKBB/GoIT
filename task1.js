// 1 - Дан блок, внутри кнопка.
// При наведении на кнопку, красить блок в красный цвет

const cardRef = document.querySelector('.card');
const deleteButtonRef = document.querySelector('.card__delete');

deleteButtonRef.addEventListener('mouseover', event => {
    cardRef.classList.add('card_focus');
});

deleteButtonRef.addEventListener('mouseout', event => {
    cardRef.classList.remove('card_focus');
})