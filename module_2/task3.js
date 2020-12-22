// const findSmallestNumber = array => Math.min(...array)

function findSmallestNumber(array) {
    let min = array[0];

    for (let i = 1; i < array.length; i++) {
        if (min > array[i]) min = array[i]
    }

    return min
}

console.log(findSmallestNumber([2, 17, 94, 1, 23, 37])); // 1
console.log(findSmallestNumber([49, 4, 83, 7, 12])); // 4