// 1. Задача. Выведите на экран текущие день, месяц и год в формате 'год-месяц-день'.
// const date = new Date();
//
// alert(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)

// 2. Выведите на экран количество часов, прошедшее между 1 марта 1988 года и текущим моментом

//
// const firstDate = new Date('March 1, 1988');
// // const firstDate = new Date(1988, 2, 1);
//
// const nowDate = new Date();
//
// alert(parseInt((nowDate - firstDate) / (1000 * 60 * 60)))



// 3. Создайте инпут, в который пользователь вводит дату своего рождения в формате
// '10-03-2013'
// При потери фокуса выведите под инпутом количество дней, которое осталось до его дня рождения.


const formRef = document.querySelector('.js-form');
const inputRef = document.querySelector('.js-input');
const textRef = document.querySelector('.js-text');

formRef.addEventListener('submit', e => e.preventDefault())

inputRef.addEventListener('blur', e => {
  const {value} = e.target;
  const birthday = new Date(value);
  const nowDate = new Date();
  const updatedBirthday = new Date(nowDate.getFullYear(), birthday.getMonth(), birthday.getDate());
  const result = nowDate > updatedBirthday
    ? (updatedBirthday.setFullYear(nowDate.getFullYear() + 1) - nowDate) / (1000 * 60 * 60 * 24)
    : (updatedBirthday - nowDate) / (1000 * 60 * 60 * 24);
  console.log(result);
});
