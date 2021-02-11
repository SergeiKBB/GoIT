// Пример 3 - Ctrl
// Дан элемент. 
// Сделайте так, чтобы по клику на него он красился в красный цвет, 
// но только если в момент клика нажата клавиша Ctrl.

const blockRef = document.querySelector('.rect');

blockRef.addEventListener('click', event => {
    if (event.ctrlKey) {
        event.target.style.backgroundColor = 'red'
    }
});