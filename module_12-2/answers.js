//
// function getData(cb) {
//     fetch('https://swapi.dev/api/planets')
//         .then(response => response.json())
//         .then(responseData => {
//             cb(responseData);
//         });
// }
//
//
// function addDataToHtml(data) {
//     document.body.innerHTML = JSON.stringify(data);
// }
//
// getData(addDataToHtml)

// let data;
//
// fetch('https://swapi.dev/api/planets')
//         .then(response => response.json())
//         .then(responseData => {
//             data = responseData;
//         });

//
// const promise = new Promise(function(resolve, reject) {
//     const rnd = Math.floor((Math.random() * 10) + 1);
//
//     setTimeout(() => {
//         if(rnd < 6) {
//             resolve(rnd);
//         } else {
//             reject(rnd);
//         }
//     }, 2000)
// })
//
// promise
//     .then(number => console.log('Number from then:', number))
//     .catch(number => console.log('Number from catch:', number))