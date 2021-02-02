const strings = ['different', 'strings', 'in', 'some', 'array'];

// strings.forEach(item => console.log(item))

const users = [
    {
        name: 'Poly',
        age: 20
    },
    {
        name: 'Emily',
        age: 25
    },
    {
        name: 'Estas',
        age: 45
    }
];
const usersInfo = users.map(user => `${user.name} is ${user.age} years old`);
const user = users.find(user => user.age === 25);
const hasEnoughYearsOld = users.some(user => user.age >= 21)

// console.log(hasEnoughYearsOld);

const library = {
    books: [
        {
            name: 'Harry Potter',
            whoTook: [
                {
                    name: 'Emily',
                    date: '25.01.2010'
                },
                {
                    name: 'Ron',
                    date: '03.11.2015'
                }
            ]
        },
        {
            name: 'Who seeks will always find',
            whoTook: [
                {
                    name: 'Petter',
                    date: '11.11.2011'
                }
            ]
        }
    ]
}

const array = [1,4,6,8];

// const sum = array.reduce((prev, current) => {
//     return prev + current
// }, 10);
//
// console.log(sum);


const lineItems = [
    { description: 'Eggs (Dozen)', quantity: 1, price: 3, total: 3 },
    { description: 'Cheese', quantity: 0.5, price: 5, total: 2.5 },
    { description: 'Butter', quantity: 2, price: 6, total: 12 }
];

const sum = lineItems.reduce((prev, item) => prev + item.total, 0)

// console.log(sum);


const people = [
    { name: 'Jean-Luc Picard', age: 59 },
    { name: 'Will Riker', age: 29 },
    { name: 'Deanna Troi', age: 29 },
    { name: 'Deanna Troi', age: 39 },
    { name: 'Deanna Troi', age: 39 },
    { name: 'Deanna Troi', age: 39 },
    { name: 'Deanna Troi', age: 11 },
    { name: 'Deanna Troi', age: 11 },
    { name: 'Deanna Troi', age: 29 },
];

const result = people.reduce((prev, user) => {
    if (prev.hasOwnProperty(user.age)) {
        prev[user.age] += 1;
    } else {
        prev[user.age] = 1;
    }
    return prev
}, {})


const resultWIthMap = people.map(user => user.age).reduce((prev, current) => {
    if (prev.hasOwnProperty(current)) {
        prev[current] += 1;
    } else {
        prev[current] = 1;
    }
    return prev;
}, {});

console.log(resultWIthMap);

// const result = {
//     29: 3,
//     59: 1,
//     39: 3,
//     11: 2
// }