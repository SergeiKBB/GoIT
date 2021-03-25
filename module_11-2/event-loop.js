console.log(1);
const fn = () => console.log(2);

console.log(3);
setTimeout(() => console.log(4), 0);
Promise.resolve()
    .then(() => {
        console.log(5)
    })

fn();

console.log(6);

// // 1 3 2 6 5 4