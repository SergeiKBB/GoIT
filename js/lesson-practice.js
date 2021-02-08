// Done by Penskyi Oleksandr
console.log(`Задание № 1:`);
// !Пример 1
// Для трех массивов целых чисел верните сумму элементов, общих для всех трех массивов.
// common([1, 2, 3], [5, 3, 2], [7, 3, 2]) = 5;
// common([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]) = 7;

const newFn = function (arr1, arr2, arr3) {
  let temporaryArr = [];

  arr1.forEach(item => {
    if (arr2.includes(item) && arr3.includes(item)) {
      temporaryArr.push(item);
    }
  });

  let total = temporaryArr.reduce((accum, item) => {
    return accum + item;
  }, 0);

  return total;
};

console.log(newFn([1, 2, 3], [5, 3, 2], [7, 3, 2]));
console.log(newFn([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]));

console.log(`Задание № 2:`);
// !Пример 2
// Напишите алгоритм, который берет массив
// и перемещает все нули в конец, сохраняя порядок других элементов.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = function (arr) {
  let temorarryArr = [];
  let arrForNull = [];
  arr.forEach(item => {
    if (item === 0) {
      arrForNull.push(item);
    } else {
      temorarryArr.push(item);
    }
  });
  //   console.log(temorarryArr);
  //   console.log(arrForNull);

  let resultArr = [...temorarryArr, ...arrForNull];
  return resultArr;
};
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));

console.log(`Задание № 3:`);
// !Пример 3
// Напишите код, который сделает из массива объект

var arr = [
  { name: 'width', value: 10 },
  { name: 'height', value: 20 },
];

const toObject = function (arr) {
  let newObj = {};

  arr.forEach(item => {
    newObj[item.name] = item.value;
  });

  return newObj;
};

console.log(toObject(arr));
// Результат: {width: 10, height: 20}

console.log(`Задание № 4:`);
// !Пример 4
// Напишите функцию, которая принимает массив объектов
// Функция должна возвращать объект, который содержит
// два свойства male и female.
// Результат выполнения функции sortByGender(students):

const students = [
  { name: 'Olha', gender: 'female' },
  { name: 'Oleh', gender: 'male' },
  { name: 'Kristi', gender: 'female' },
];

const sortByGender = function (students) {
  let result = {};
  let maleArr = [];
  let femaleArr = [];
  students.forEach(item => {
    if (item.gender === 'male') {
      maleArr.push(item);
    } else {
      femaleArr.push(item);
    }
  });

  //   console.log(maleArr);
  //   console.log(femaleArr);
  result.male = maleArr;
  result.female = femaleArr;
  return result;
};
console.dir(sortByGender(students));

console.log(`Задание № 5:`);
// !Пример 5
class Component {
  style = {
    display: 'block',
  };

  constructor(tag) {
    this.tag = tag;
  }

  hide() {
    this.style.display = 'none';
  }
  show() {
    this.style.display = 'block';
  }
}

class Box extends Component {
  constructor({ tag, size, color }) {
    super(tag);
    this.size = size;
    this.backgroung = color;
  }

  getProps() {
    console.log(
      `Tag: ${this.tag}; Width: ${this.size}; Height: ${this.size}; Background: ${this.backgroung}; Display: ${this.style.display}`,
    );
  }
}

const box1 = new Box({
  tag: '<div></div>',
  size: 100,
  color: 'green',
});
box1.hide();
box1.getProps();

const box2 = new Box({
  tag: '<div></div>',
  size: 50,
  color: 'red',
});

box2.getProps();

console.log(`Задание № 6:`);
// !Пример 6
// Есть несколько слов, определить состоят
// ли они из одних и тех же букв('кот', 'ток', 'окт')

const compareFn = function (str1, str2, str3) {
  const arr1 = str1.split('');
  const arr2 = str2.split('');
  const arr3 = str3.split('');

  const result = arr1.every(item => arr2.includes(item) && arr3.includes(item));
  return result;
};
console.log('Состоит ли из одних и тех же букв?:', compareFn('кот', 'ток', 'окт'));

console.log(`Задание № 7:`);
// !Пример 7
// Реализовать методы, которые в процессе
// выполнения строки (2).plus(3).minus(1) дали бы на выходе 4.

const replaceFn = function (str) {
  let newArr = [];

  str.split('').forEach(item => {
    if (item !== '(' && item !== ')' && item !== '.') {
      newArr.push(item);
    }
  });

  // console.log(newArr); // ["2", "p", "l", "u", "s", "3", "m", "i", "n", "u", "s", "1"]

  const totalString = newArr.join('').replace('plus', '+').replace('minus', '-'); // '2+3-1'

  const total = eval(totalString); // 4
  return total;
};
console.log(replaceFn('(2).plus(3).minus(1)'));

console.log(`Задание № 8:`);
// !Пример 8
// !Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5
const f = function (x) {
  // Каррирование, при условии передачи сначало одого аргумента
  if (arguments.length === 1) {
    return function innerF(y) {
      return x + y;
    };
  }

  // Если передается в функцию больше одного аргумента, то создаем массив аргументов и перебираем их
  if (arguments.length > 1) {
    return [...arguments].reduce((accum, item) => {
      return accum + item;
    }, 0);
  }
};

console.log(f(2)(3));
console.log(f(2, 3));
