/* eslint-disable no-undef */
// Пример 3 - живой поиск простой

const searchInputRef = document.querySelector('.search');
const countryListRef = document.querySelector('.js-country-list');

renderFilteredList('');

let countOfCall = 0;
searchInputRef.addEventListener('input', event => {
    renderFilteredList(event.target.value);
    console.log(++countOfCall);
});

function renderFilteredList(value) {
    const filteredList = countries.filter(name =>{
        const result = name.toLowerCase().startsWith(value.toLowerCase());
        return result
    });
    const mappedFilteredList = filteredList.map(createCountryRef);

    countryListRef.innerHTML = '';
    countryListRef.append(...mappedFilteredList);
}

function createCountryRef(name) {
    const itemRef = document.createElement('h2');
    itemRef.classList.add('country');
    itemRef.textContent = name;

    return itemRef;
}