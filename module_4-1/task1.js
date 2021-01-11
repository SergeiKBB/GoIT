function letMeSeeYourName(callback) {
    const name = prompt('What is your name?');
    callback(name);
}

function greet(name) {
    console.log('Привет ' + name);
}

letMeSeeYourName(greet);