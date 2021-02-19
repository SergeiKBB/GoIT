/* eslint-disable no-undef */
// 5 - инфинити скрол IntersectionObserver

const COUNT_OF_COUNTRIES = 10;
let startFrom = 0;

const countryListRef = document.querySelector('.js-country-list');
const anchorRef = document.querySelector('.anchor');
const anchor2Ref = document.querySelector('.anchor2');

renderPartOfCountries();
let countOfCall = 0;

const observer = new IntersectionObserver((entries, observer) => {
    console.dir(observer);
    startFrom += COUNT_OF_COUNTRIES;
    renderPartOfCountries();
}, {});

observer.observe(anchorRef);
observer.observe(anchor2Ref);

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

