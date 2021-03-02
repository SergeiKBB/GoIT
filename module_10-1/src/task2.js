// Расширьте код, добавив галерею картинок в контент блок используя isotope.js
// https://isotope.metafizzy.co/
// Картинки можете взять с https://www.pexels.com/uk-ua/
import Isotope from 'isotope-layout';
import bm1 from  './images/cars/bmw1.jpg';
import bm2 from  './images/cars/bmw2.jpg';
import bm3 from  './images/cars/bmw3.jpg';
import bm4 from  './images/cars/bmw4.jpg';
import bm5 from  './images/cars/bmw5.jpg';
import mercedes1 from  './images/cars/mercedes1.jpg';
import mercedes2 from  './images/cars/mercedes2.jpg';
import mercedes3 from  './images/cars/mercedes3.jpg';
import mercedes4 from  './images/cars/mercedes4.jpg';
import porsche1 from  './images/cars/porsche1.jpg';
import porsche2 from  './images/cars/porsche2.jpg';

const cars = [
  {
    model: 'bmw1',
    year: 1990,
    url: bm1,
  },
  {
    model: 'bmw2',
    year: 1990,
    url: bm2
  },
  {
    model: 'bmw3',
    year: 1990,
    url: bm3
  },
  {
    model: 'bmw4',
    year: 1990,
    url: bm4
  },
  {
    model: 'bmw5',
    year: 1990,
    url: bm5
  },
  {
    model: 'mercedes1',
    year: 1990,
    url: mercedes1
  },
  {
    model: 'mercedes2',
    year: 1990,
    url: mercedes2
  },
  {
    model: 'mercedes3',
    year: 1990,
    url: mercedes3
  },
  {
    model: 'mercedes4',
    year: 1990,
    url: mercedes4
  },
  {
    model: 'porsche1',
    year: 1990,
    url: porsche1
  },
  {
    model: 'porsche2',
    year: 1990,
    url: porsche2
  },
]

const gridRef = document.querySelector('.grid');

//
// const mappedCarsImages = cars.map(createElement);
//
// gridRef.append(...mappedCarsImages);
//
// const bmw2Ref = document.querySelector("img[src='images/cars/bmw2.jpg']")
// bmw2Ref.parentNode.classList.add('grid-item--width2');
//
// const bmw3Ref = document.querySelector("img[src='images/cars/bmw3.jpg']")
// bmw3Ref.parentNode.classList.add('grid-item--height2');


const iso = new Isotope(gridRef, {
  itemSelector: '.grid-item',
})



function createElement(img) {
  const imgRef = document.createElement('img');
  const gridItemRef = document.createElement('div');

  imgRef.src = img.url;
  imgRef.classList.add('car-item');
  gridItemRef.classList.add('grid-item');

  gridItemRef.appendChild(imgRef);

  return gridItemRef;
}
