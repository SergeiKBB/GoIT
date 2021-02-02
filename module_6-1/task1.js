const prices = [2, 14, 1, 37, 26, 8];
// const pricesInAscendingOrder = prices;
// const pricesInDescendingOrder = prices;

console.log([...prices].sort((a, b) => a - b).reverse())
console.log(prices)