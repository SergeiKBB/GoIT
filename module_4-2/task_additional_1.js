const shop = {
    books: [
        {author: 'Стивен Кинг', price: 10},
        {author: 'Бодо Шефер', price: 20}
    ],
    discount: 0.1,
    showTotalPriceWithDiscount: function () {
        let totalPrice = 0;
        this.books.forEach(book => {
            totalPrice += book.price - book.price * this.discount
        })

        return totalPrice
    }
};

console.log(shop.showTotalPriceWithDiscount())