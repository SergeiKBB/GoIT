class Animal {
    constructor(hasTail) {
        this.hasTail = hasTail;
    }

    may() {
        console.log('Mayyyyy');
    }
}

class Cat extends Animal {
    constructor(name, hasTail) {
        super(hasTail);
        this.name = name;
    }
}

const viskas = new Cat('viskas', true);

console.log(viskas);
