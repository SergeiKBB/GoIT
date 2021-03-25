// try {
//     axios.get('https://swapi.dev/api/peopleeee')
//         .then(data => console.log(data))
//         .catch(error => console.log(error))
// } catch(error) {
//     console.log(error)
// }

// document.addEventListener('mousemove', e => {
//     console.log(e.target);
// })

function count() {
    let i = 0;

    for (let k = 0; k < 3e9; k++) {
        i+=1;
    }
}

Promise.resolve(5).then(value => console.log(value));

fetch('https://swapi.dev/api/people').then(data => console.log(data));

setTimeout(() => console.log('Timeout'), 3000);

count();

console.log('finish');
