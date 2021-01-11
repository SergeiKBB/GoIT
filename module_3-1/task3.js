const stones = [
    { name: 'Изумруд', price: 1300, quantity: 4 },
    { name: 'Бриллиант', price: 2700, quantity: 3 },
    { name: 'Сапфир', price: 400, quantity: 7 },
    { name: 'Щебень', price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
    let totalPrice = 0;
    for (let stone of stones) {
        if (stone.name === stoneName) {
            totalPrice = stone.price * stone.quantity;
        }
    }
    return totalPrice;
}

console.log(calcTotalPrice(stones, 'Щебень'));

