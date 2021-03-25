// Promise.all

function makePromise(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(message, 'is resolved');
            if(delay <= 5) resolve(message);
            else reject('More than 5');
        }, delay*1000);
    })
}


const promises = [makePromise('promise1', 1), makePromise('promise2', 7), makePromise('promise3',2)];

Promise
    .race(promises)
    .then(data => console.log('Array of results', data))
    .catch(error => console.log(error));
