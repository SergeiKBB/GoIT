/* eslint-disable no-undef */
// Пример 2 - инфинити скрол с троттлингом
/* eslint-disable no-undef */
// 1 - инфинити скрол простой
// window.innerHeight, window.scrollY, document.body.offsetHeight

const COUNT_OF_COUNTRIES = 10;
let startFrom = 0;

const countryListRef = document.querySelector('.js-country-list');

renderPartOfCountries();
let countOfCall = 0;

const throttledHandleScroll = _.throttle(handleScroll, 500);

window.addEventListener('scroll', throttledHandleScroll);

function handleScroll(event) {
    console.log(++countOfCall);
    if(!isScrolledBottom()) return;

    startFrom += COUNT_OF_COUNTRIES;
    renderPartOfCountries();
}


function isScrolledBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

function renderPartOfCountries() {
    const mappedCountries = countries
        .slice(startFrom, startFrom + COUNT_OF_COUNTRIES)
        .map(createCountryRef);

    countryListRef.append(...mappedCountries);
}

function createCountryRef(name) {
    const itemRef = document.createElement('h2');
    itemRef.classList.add('country');
    itemRef.textContent = name;

    return itemRef;
}

