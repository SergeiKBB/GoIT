# Модуль 4. Занятие 2. Коллбек функции. Замыкания. this

## Пример 1 - Коллбек функции

Напишите функцию `each(array, callback)`, которая первым параметром принимает массив, а вторым - функцию, которая применится к каждому элементу массива. Функция each должна вернуть новый массив, элементами которого будут результаты вызова коллбека.

```js
```

## Пример 2 - Замыкания

Напишите функцию `makeCounter()`, которая возвращает другую функцию, которая считает и логирует количество своих вызовов.

```js
```

## Пример 3 - Замыкания

Напишите функцию `savePassword(password)` которая принимает пароль и возвращает внутреннюю функцию, которая принимает строку и возвращает буль `true`, если строка совпадает с сохраненным паролем и `false` - если не совпадает.


```js
```

## Пример 4 - Замыкания

Напишите функцию для хранения скидки. Функция возвращает другую функцию, которая принимает сумму покупки и возвращает финальную сумму с сохранённой скидкой.

```js
function applyDiscount(discount) {
}

const withBaseDiscount = applyDiscount(0);
const withSilverDiscount = applyDiscount(0.05);
const withGoldDiscount = applyDiscount(0.1);

console.log(withBaseDiscount(100));
console.log(withBaseDiscount(200));
console.log(withSilverDiscount(100));
console.log(withSilverDiscount(200));
console.log(withGoldDiscount(100));
console.log(withGoldDiscount(200));
```

## Пример 5 - Контекст

```js
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo); // 
        console.log("outer func:  self.foo = " + self.foo); // 
        (function() {
            console.log("inner func:  this.foo = " + this.foo); // 
            console.log("inner func:  self.foo = " + self.foo); // 
        }());
    }
};
myObject.func();


```

### Пример 6 - Контекст
```js

var length = 10;
function fn() {
	console.log(this.length); 
}

var obj = {
  length: 5,
  method: function(fn) {
    fn(); // 
    arguments[0](); //
  }
};

obj.method(fn, 1);

```