function deepFreeze(obj) {
    const keys = Object.keys(obj);

    keys.forEach(key => {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            deepFreeze(obj[key])
        }
    });

    return Object.freeze(obj);
}

// deepFreeze(person)
// deepFreeze(profession)
// deepFreeze(requestParams)


let person = {
    name: "Leonardo",
    profession: {
        name: "developer",
        requestParams: {
            id: 1
        }
    }
};

const newObj = deepFreeze(person);

newObj.name = 3

console.log(newObj);
