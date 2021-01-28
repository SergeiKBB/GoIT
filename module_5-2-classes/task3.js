class Client {
    #login;
    #email;

    constructor(options) {
        this.#email = options.email;
        this.#login = options.login;
    }

    get login() {
        return this.#login;
    }

    set login(login) {
        this.#login = login
    }

    get email() {
        return this.#email;
    }

    set email(email) {
        this.#email = email
    }
}

const mango = new Client({
    login: 'Mango',
    email: 'mango@dog.woof',
});


console.log(mango.login); // Mango
mango.login = 'Mangodoge';
console.log(mango.login); // Mangodoge

const poly = new Client({
    login: 'Poly',
    email: 'poly@mail.com',
});

console.log(poly.login); // Poly
poly.login = 'Polycutie';
console.log(poly.login); // Polycutie