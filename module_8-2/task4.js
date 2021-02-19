/* eslint-disable no-undef */
// 4 - живой поиск с дебаунсом

const searchInputRef = document.querySelector('.search');
const countryListRef = document.querySelector('.js-country-list');

renderFilteredList('');

let countOfCall = 0;

const debouncedHandleInput = _.debounce(handleInput, 700);

searchInputRef.addEventListener('input',debouncedHandleInput);

function handleInput(event) {
    renderFilteredList(event.target.value);
    console.log(++countOfCall);
}

function renderFilteredList(value) {
    const filteredList = countries.filter(name => {
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