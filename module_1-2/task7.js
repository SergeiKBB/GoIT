let total = 0;

while(true) {
    const value = prompt('Enter the number')
    if (value === null) {
        break;
    } else {
        total += +value
    }
}

alert(`Общая сумма чисел равна ${total}`)
