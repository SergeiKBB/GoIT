const salaries = {}


const values = Object.values(salaries);

let sum = 0;

for (let value of values) {
    sum +=value;
}

console.log(sum);