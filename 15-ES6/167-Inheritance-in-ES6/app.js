class Person {
    constructor(name) {
        this.name = name
    }
}


class PersonTwo extends Person {
    constructor(name, age) {
        super(name)
        this.age = age
    }
    play() {
        console.log('Is playing...........');
    }
}

let newPerson = new PersonTwo('Mks Tamin', 23)

console.log(newPerson.name);
console.log(newPerson.age);

newPerson.play()