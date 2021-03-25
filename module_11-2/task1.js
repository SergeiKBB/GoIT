// 1 - Функции resolve и reject

// Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды,
// после которой промис должен зарезолвится (то есть выполнится успешно).

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Success'), 3000)
})

// promise.then((message) => console.log(message));

// Сделайте функцию, которая будет генерировать случайные числа от 1 до 10.
// Сделайте так, чтобы сгенерированное число было задержкой функции setTimeout в секундах.
// Оберните все это в промис.
// Пусть промис выполнится успешно, если сгенерировано число от 1 до 5,
// и с ошибкой - если от 6 до 10.

const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

const promiseWithRandom = new Promise((resolve, reject) => {
    const delay = getRandomNumber();

    setTimeout(() => {
        if (delay < 6 ) {
            resolve(delay);
        } else {
            reject(delay);
        }
    }, delay * 1000)
});

promiseWithRandom
    .then((delay) => console.log('Resolve with:', delay))
    .catch((delay) => console.log('Reject with:', delay))