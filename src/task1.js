// Используя SWAPI (Star Wars API) - https://swapi.dev/ получите список кораблей
// Используя шаблонизатор Handlebars - https://handlebarsjs.com/ отобразите полученный список данных на странице
import planetsTemplate from './templates/planets.hbs';
import * as swapi from './lib/swapi';

// const todos = ['Go to the shop', 'Watch The Witcher 2', 'Read the book (about JS)'];
//
// const todosMarkup = todosTemplate({todos});
//
// const rootRef = document.querySelector('.root');
//
// rootRef.innerHTML = todosMarkup;

const rootRef = document.querySelector('.root');

swapi.API.getPlanets(data => {
  const planets = planetsWithFormattedDate(data.results);

  const planetsMarkup = planetsTemplate({planets});

  rootRef.innerHTML = planetsMarkup;
  console.log(planets);
})


function planetsWithFormattedDate(planets) {
  return planets.map(planet => ({
    ...planet,
    created: formatDate(planet.created)
  }))
}

function formatDate(date) {
  const currentDate = new Date(date);
  return `${makeFullDateFormat(currentDate.getDate())}.${makeFullDateFormat(currentDate.getMonth())}.${currentDate.getFullYear()}`
}

console.log(formatDate('2014-12-09T13:50:49.641000Z'))


function makeFullDateFormat(date) {
  return (''+ date).length < 2 ? '0' + date : date
}
