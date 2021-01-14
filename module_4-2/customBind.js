function bind(func, context) {
    return function (...args) {
        return func.apply(context, args)
    }
}

const shopWithHorrors = {
    books: [
        {author: 'Стивен Кинг', price: 10},
        {author: 'Бодо Шефер', price: 20}
    ],
    discount: 0.1
};

function showTotalPriceWithDiscount(firstBook, secondBook) {
    let totalPrice = 0;
    this.books.forEach(book => {
        totalPrice += book.price - book.price * this.discount
    })

    return totalPrice
}

// const funcWithHorror = showTotalPriceWithDiscount.bind(shopWithHorrors); // use JS`s bind

const funcWithHorror = bind(showTotalPriceWithDiscount, shopWithHorrors); // use custom bind

console.log(funcWithHorror());








