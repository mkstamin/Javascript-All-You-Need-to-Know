const _name = new WeakMap()
const _play = new WeakMap()
class Person {
    constructor(name, age) {
        _name.set(this, name)
        this.age = age
        _play.set(this, () => {
            console.log('Is Playing........');
        })
    }

}

let personOne = new Person('Mks Tamin', 24)

console.log(personOne);
console.log(personOne.age);