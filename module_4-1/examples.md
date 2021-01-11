# Модуль 4. Занятие 1. Коллбек функции. Замыкания. this

## Пример 1 - Коллбек функции

Напишите две функции:

- `letMeSeeYourName(callback)` - спрашивает имя пользователя через `prompt` и вызывает коллбек ф-цию `callback`
- `greet(name)` - коллбек принимающий имя и логирующий в консоль строку `"Привет" + name`


## Пример 2 - Коллбек функции

Напишите две функции:

- `makeProduct(name, price, callback)` - принимает имя и цену товара, а также колбек. Функция создаёт обьект товара, добавляя ему уникальный идентификатор в свойство `id` и вызывает колбек передавая ему созданный обьект.
- `showProduct(product)` - коллбек принимающий обьект продукта и логирующий его в консоль


## Пример 3 - Замыкания и каррирование

Выполните рефакторинг функции makeDishWithShef(shefName, dish) так, чтобы не нужно было каждый раз передавать имя шефа.
Напишите функцию makeShef(shefName), которая возвращает другую функцию makeDish(dish), помнящую имя шефа при её вызове.

```js
function makeDishWithShef(shefName, dish) {
    console.log(`Шеф ${shefName} готовит ${dish}`);
}

makeDishWithShef('Поли', 'пирожок');
makeDishWithShef('Поли', 'чай');
makeDishWithShef('Манго', 'тортик');
makeDishWithShef('Манго', 'кофе');
```

## Пример 4 - Ключевое слово this

Исправьте ошибки чтобы код работал.

```js
const product = {
  price: 5000,
  showPrice() {
    console.log(price);
  }
}

product.showPrice();
```

## Пример 5 - Привязка контекста

Исправьте ошибки чтобы код работал.

```js
const product = {
  price: 5000,
  showPrice() {
    console.log(this.price);
  }
}


function callAction(action) {
  action();
}

callAction(product.showPrice);
```