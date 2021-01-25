const user = {
    name: 'Serhii',
    age: 22,
    haveAreYou: function () {
        console.log('I am fine!')
    },
    prototype: {
        someFunc: function (){
            console.log('someFunc here')
        }
    }
};

const anotherUser = {
    __proto__: user
}


anotherUser.prototype.someFunc();
