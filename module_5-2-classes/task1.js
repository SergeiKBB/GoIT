class User {
    constructor(options) {
        this.username = options.username;
        this.age = options.age;
        this.numberOfPosts = options.numberOfPosts;
    }

    getInfo() {
        return `User ${this.username} is ${this.age} years old and has ${this.numberOfPosts} posts`
    }
}

const mango = new User({
    username: 'Mango',
    age: 24,
    numberOfPosts: 20,
});

console.log(mango); // User Mango is 24 years old and has 20 posts

const poly = new User({
    username: 'Poly',
    age: 19,
    numberOfPosts: 17,
});

console.log(poly.getInfo());