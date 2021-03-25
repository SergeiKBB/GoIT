// fetch('http://swapi.dev/api/people/11202021')
//     .then(response => {
//         const {ok , status} = response;
//         if(ok) {
//             return response.json();
//         } else {
//             if(status === 404) {
//                 throw new Error('not found')
//             }
//         }
//         }
//     )
//     .then(data => console.log(data))
//     .catch(error => console.log(error, 'from catch'))

// fetch("https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=New%20York", {
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-key": "7ebbbacef9msh91c859466216adap103bf1jsn65d86b03a0d2",
//         "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com"
//     }
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => {
//         console.error(err);
//     });