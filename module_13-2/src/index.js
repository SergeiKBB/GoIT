import {Library} from './api';
import tmp from './templates';

import './styles.css';
import {USER_TYPES} from "./api/constants";

const rootRef = document.querySelector('.root');
rootRef.innerHTML = tmp.initial();


const leftBlockRef = document.querySelector('.js-left-block');
const rightBlockRef = document.querySelector('.js-right-block');


leftBlockRef.addEventListener('click', e => {
  const name = prompt('Library`s name');
  const address = prompt('Library`s address');

  const library = new Library(name, address);
  library.createLibrary().then(async ({data}) => {

    const userTypes = Object.values(USER_TYPES);

    rootRef.innerHTML = tmp.wrapper({
      header: tmp.header({name: library.name}),
      sidebar: tmp.sidebar(),
      content: tmp.content({userTypes})
    });

    const userFormRef = document.querySelector('.js-user-form');

    userFormRef.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(userFormRef);
      const user = {};
      for (let [name, value] of formData) {
        user[name] = value;
      }
      library.addUser(user).then(response => console.log(response))
    })
  });
})
