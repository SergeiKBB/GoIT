var length = 10;
function fn() {
    console.log(this.length);
}

var obj = {
    length: 5,
    method: function(fn) {
        // arguments = [fn, 1]
        fn(); // 5
        arguments[0](); // 2
    }
};

obj.method(fn, 1);