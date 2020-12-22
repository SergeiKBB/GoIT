function calculateAverage() {
    const items = Array.from(arguments);
    let total = 0;
    for (let item of items) {
        total += item;
    }

    return total / items.length;
}

console.log(calculateAverage(1, 2, 3, 4)); // 2.5
console.log(calculateAverage(14, 8, 2)); // 8
console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2