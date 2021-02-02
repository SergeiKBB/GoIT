const items = [
    {name: 'SAMSUNG', price: 15000},
    {name: 'LG', price: 9000},
    {name: 'ASUS', price: 27000},
    {name: 'DELL', price: 12000},
    {name: 'BENQ', price: 7000}
];
// По свойству price
const itemsByAscendingPrice = [...items].sort((a, b) => a.price - b.price);
const itemsByDescendingPrice = [...itemsByAscendingPrice].reverse();

console.log(itemsByDescendingPrice);
// По свойству name
const itemsInAlphabeticalOrder = items;
const itemsInDescAlpahbeticalOrder = items;