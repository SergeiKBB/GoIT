function min(a,b) {
    if(a < b) {
        return a;
    } else if(a > b) {
        return b;
    }

    return 'a === b'
}

console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1