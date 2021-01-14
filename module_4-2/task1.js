function each(array, callback) {
    const newArray = [];
    // array = [1,2,3,4,5]
    // array.forEach(item => { // 1
    //     // callback ---- value => value+1
    //     const newValue = callback(item)
    //     // newValue = 2
    //     return newArray.push(newValue); // newArray = [2]
    // });

    array.forEach(item => newArray.push(callback(item)));

    return newArray
}


const Serhii = {
    name: 'Serhii',
    city: 'Kiev'
};

const Olya = {
    name: 'Olya',
    city: 'Lviv'
};

console.log(each([1,2,3,4,5], value => value+1));
console.log([Serhii, Olya]);
console.log(each([Serhii, Olya], obj => `${obj.name} lives in ${obj.city}`));
