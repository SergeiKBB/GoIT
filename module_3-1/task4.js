const calculator = {
    read: function (a, b) {
        this.a = a;
        this.b = b;
    },
    sum: function () {
        return this.a + this.b;
    },
    mult: function () {
        return this.a * this.b;
    }
}

calculator.read(5, 4);

console.log(calculator);

console.log(calculator.sum());
console.log(calculator.mult());