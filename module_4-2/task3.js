function savePassword(password) {
    // password = 'some password'
    return function (str) {
        // password = 'some password'
        return password === str;
    }
}

const checkPassword = savePassword('some password');

// checkPassword = function (str) {
//         password = 'some password'
//         return password === str;
//     }

console.log(checkPassword('12345'));
console.log(checkPassword('some password'));