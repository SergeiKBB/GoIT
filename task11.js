const total = prompt('What is the number?');
const hours = Math.floor(total / 60);
const minutes = total % 60;

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);

console.log(hours);
console.log(minutes);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
