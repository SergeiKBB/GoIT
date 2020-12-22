# Модуль 2. Занятии 3,4. Массивы и функции

## Пример 1 - Функции

Напишите функцию `min(a,b)`, которая возвращает меньшее из чисел `a` и `b`.

### Код

```js
console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1
```

## Пример 2 - Перебор массива

Напиши функцию `logItems(array)`, которая получает массив и использует цикл `for`, который для каждого элемента массива будет выводить в консоль сообщение в формате `<номер элемента> - <значение элемента>`. Нумерация элементов должна начинаться с `1`.

Например для первого элемента массива `['Mango', 'Poly', 'Ajax']` с индексом `0` будет выведено `1 - Mango`, а для индекса 2 выведет `3 - Ajax`.

### Код

```js
const names = ['Mango', 'Poly', 'Ajax'];

logItems(names);
```

## Пример 3 - Поиск элемента


Напиши функцию `findSmallestNumber(numbers)`которая ищет самое маленькое число в массиве.


### Код

```js
console.log(findSmallestNumber([2, 17, 94, 1, 23, 37])); // 1
console.log(findSmallestNumber([49, 4, 83, 7, 12])); // 7
```

## Пример 4 - Псевдомассив arguments

Напиши функцию `calculateAverage()` которая принимает произвольное кол-во аргументов и возвращает их среднее значение. Все аругменты будут только числами.

### Код

```js
function calculateAverage() {}

console.log(calculateAverage(1, 2, 3, 4)); // 2.5
console.log(calculateAverage(14, 8, 2)); // 8
console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
```
## Пример 5 - Поиска самого длинного слова

Напиши фукцнию `findLongestWord(string)` которая принимает произвольную строку
состоящую только из слов разделённых пробелом (параметр `string`) и возвращает
самое длинное слово в этой строке.

### Код
```js
findLongestWord('The quick brown fox jumped over the lazy dog'); // 'jumped'
findLongestWord('Google do a roll'); // 'Google'
findLongestWord('May the force be with you'); // 'force'
```

## Пример 6 - Стрелочные функции (explicit return)

Выполните рефакторинг заменив объявление функции на стрелочную функцию.

### Код

```js
function checkNumbers(a, b) {
  if (a > b) {
    return `число ${a} больше ${b}`;
  }

  return `число ${b} больше ${a}`;
}
```

## Пример 7 - Стрелочные функции (implicit return)

Выполните рефакторинг заменив объявление функции на стрелочную функцию.

### Код

```js
function mult(x, y, z) {
  return x * y * z;
}
```

## Пример 8 - Разница массивов

Ваша цель в этом примере - реализовать функцию различия, которая вычитает один список из другого и возвращает результат.

Функция должна удалить все значения из массива a, которые присутствуют в массиве b.

### Код

```js
arrayDiff([1,2,2,2,3],[2]) // [1,3]
```

## Пример 9 - Коллекция курсов (includes, indexOf, push и т. д.)

Напишите функции для работы с коллекцией обучающих курсов `courses`:

- `addCourse(name)` - добавляет курс в конец коллекции
- `removeCourse(name)` - удаляет курс из коллекции
- `updateCourse(oldName, newName)`- изменяет имя на новое

### Код

```js
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

addCourse('Express'); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'У вас уже есть такое курс'
removeCourse('React'); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Курс с таким имененем не найден'
updateCourse('Express', 'NestJS'); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
```

## Пример 10 - Сортировка массива с циклом, без Array.prototype.sort()

Вернуть отсортированную копию по алфавиту (не меняя исходный массив)

### Код

```js
const array = ["HTML", "JavaScript", "CSS"];
```

### Решение

```js
const array = ["HTML", "JavaScript", "CSS"];
const clonedArray = [...array];

for (let i = 0; i < clonedArray.length; i++) {
  let min = i;
  for (let k = i + 1; k < clonedArray.length; k++) {
    if (clonedArray[min] > clonedArray[k]) {
      min = k;
    }
  }
  let temp = clonedArray[min];
  clonedArray[min] = clonedArray[i];
  clonedArray[i] = temp;
}

console.log(clonedArray);
```