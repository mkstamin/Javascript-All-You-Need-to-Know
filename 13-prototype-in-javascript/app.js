// function Person(name, age) {
//     let person = Object.create(Person.prototype)
//     person.name = name
//     person.age = age

//     return person;
// }

// Person.prototype = {
//     eat: function () {
//         console.log('Person is eating');
//     },
//     play: function () {
//         console.log('Person is playing');
//     },
// }

// let karim = Person('karim', 35)
// karim.eat()
// let tamim = Person('Tamim', 35)
// tamim.play()


// function Person(first, last, age) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
// }

// Person.prototype.obj = {
//     e: "English",
//     b: "Bangla",
//     f: function () {
//         console.log("Function");
//     }
// }

// let p = new Person('mks', 'tamin', 25)

// console.dir(p)


function Bangla(language) {
    this.language = language
}

Bangla.prototype.newf = function () {

}

let ban = new Bangla('Bangla')
console.dir(ban);



function newfunc(n) {
    return {
        n,
        obj: function () {
            console.log('hello');
        }
    }
}
let f = newfunc(4)

console.dir(f);



































