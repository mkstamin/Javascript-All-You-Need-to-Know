class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.eat = function () {
            console.log('Is eating.....');
        }
    }
    city = 'Dhaka'
    play = function () {
        console.log('Playing.............');
    }
}


let personOne = new Person('Mks Tamin', 24)

console.dir(personOne);
