export const BASE_URL = 'https://rickandmortyapi.com/api/';
export const DEFAULT_CHARACTER_URL = BASE_URL + 'character/';
export const CHARACTER_PAGE_URL = DEFAULT_CHARACTER_URL + '?page=';

// fetch(DEFAULT_CHARACTER_URL)
//     .then(response => response.json())
//     .then(data => console.log(data))

// async function getData() {
//     try {
//         const response = await axios(BASE_URL + 'asdasd');
//         console.log(response);
//         console.log('try')
//         return response
//     } catch (err) {
//         console.log('catch')
//         return err;
//     }
// }

// function getDataWithPromise() {
//     console.log('before response');
//     fetch(DEFAULT_CHARACTER_URL)
//         .then(response => response.json())
//         .then(data => console.log(data, 'data'))
//     console.log('after response');
// }

// getDataWithPromise()
// (async function getResult() {
//     const result = await getData();
//     console.log(result);
// })();

// getData().then(data => {
//
// })
//
// fetch('some url')
//     .then(data => console.log(data))
//     .catch(err => console.log(err, 'error'));


async function getData() {
    try {
        const response = await fetch(BASE_URL + 'asdasd');
        console.log(response);
        console.log('try')
        return response
    } catch (err) {
        console.log('catch')
        return err;
    }
}

(async function getResult() {
    const result = await getData();
    console.log(result);
})();