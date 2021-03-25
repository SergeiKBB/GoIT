import * as api from './api'; // Импортирует index.js с папки api (название файла должно быть только index.js)

import cardsTemplate from './templates/cards.hbs';

import './styles.css';
import {CHARACTER_PAGE_URL} from "./api";

const containerRef = document.querySelector('.js-data-list');
const anchorRef = document.querySelector('.anchor');

let page = 0;

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      page += 1;
      console.log(page)
      api.getCharacters(CHARACTER_PAGE_URL + page).then(data => {
        const markup = cardsTemplate(data.characters);
        containerRef.insertAdjacentHTML('beforeend', markup);
      })
    }
  })
}, {
  rootMargin: '500px'
});


observer.observe(anchorRef);
