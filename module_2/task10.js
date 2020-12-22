const array = [3, 1, 2];
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