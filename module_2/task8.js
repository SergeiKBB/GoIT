
function arrayDiff(firstArray, secondArray) {
    const diffOfArrays = [];
    for (let i = 0; i < firstArray.length; i++) {
        if (!secondArray.includes(firstArray[i])) {
            diffOfArrays.push(firstArray[i])
        }
    }
    return diffOfArrays;
}


console.log(arrayDiff([1,2,2,2,3,4,5,6],[2,4])) // [1, 3, 5, 6]