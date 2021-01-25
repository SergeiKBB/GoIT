# Модуль Q&A. Занятие 1.

## Пример 1 - Типы данных

Какой будет результат выполнения кода?

### Код

```js
typeof undefined
typeof 1
typeof true
typeof "foo"
typeof {}
typeof []
typeof null
```

## Пример 2 - Передача значения по ссылке

Что выведется в консоль?

### Код

```js
const output = (function(x) {
    delete x;
    return x;
})(0);

console.log(output); //
```

## Пример 3 - Object.freeze

Что такое Object.freeze и как он работает? Реализовать глубокую заморозку объекта.

### Код

```js
let person = {
    name: "Leonardo",
    profession: {
        name: "developer"
    }
};
```

## Пример 4 - Передача параметров по ссылке/значению

Что выведется в консоль?

### Код

```js
function changeStuff(a, b, c)
{
    a = a * 10;
    b.item = "changed";
    c = {item: "changed"};
}

var num = 10;
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

console.log(num);
console.log(obj1.item);
console.log(obj2.item);
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
