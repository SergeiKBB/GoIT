const shopWithHorrors = {
    books: [
        {author: 'Стивен Кинг', price: 10},
        {author: 'Бодо Шефер', price: 20}
    ],
    discount: 0.1
};

const showWithNovels = {
    books: [
        {author: 'Какой-то автор', price: 10},
        {author: 'Ещё один автор', price: 20}
    ],
    discount: 0.3,
}

function showTotalPriceWithDiscount(firstBook, secondBook) {
    let totalPrice = 0;
    this.books.forEach(book => {
        totalPrice += book.price - book.price * this.discount
    })

    return totalPrice
}

// console.log(showTotalPriceWithDiscount.call(shopWithHorrors, 'book1', 'book2'));
// console.log(showTotalPriceWithDiscount.apply(showWithNovels, ['book1', 'book2']));



const funcWithHorror = showTotalPriceWithDiscount.bind(shopWithHorrors);
const totalPriceWithDiscount = showTotalPriceWithDiscount.call(shopWithHorrors, 'book1', 'book2');

console.log(funcWithHorror());
console.log(totalPriceWithDiscount);








