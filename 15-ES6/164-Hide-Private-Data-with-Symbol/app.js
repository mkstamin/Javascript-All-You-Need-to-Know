const _name = Symbol()
const _play = Symbol()
class Person {
    constructor(name, age) {
        this[_name] = name
        this.age = age
    }
    [_play]() {
        console.log('Is Playing........');
    }
}

let personOne = new Person('Mks Tamin', 24)

// console.log(personOne);
console.log(personOne.age);

personOne.play()