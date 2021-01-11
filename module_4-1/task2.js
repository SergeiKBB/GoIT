function makeProduct(name, price, callback) {
    const product = {
        id: Date.now(),
        name,
        price
    };
    callback(product);
}

function showProduct(product) {
    const { id, name, price } = product;
    console.log(`id: ${id}, name: ${name}, price: ${price}`)
}

makeProduct('milk', 10, showProduct);
