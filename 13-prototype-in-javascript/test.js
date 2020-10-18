// function Person(name) {
//     this.name = name
// }

// let per1 = new Person('Mks Tamin')

// console.log(per1);


// let person = {
//     name: 'Mks Tamin'
// }



// let des = Object.getOwnPropertyDescriptor(person,'name')

// let desObj = Object.getPrototypeOf(person)
// let des = Object.getOwnPropertyDescriptor(desObj, 'toString')

// console.log(des);

// Object.defineProperty(person, 'name', {
//     enumerable: false,
//     configurable: false,
//     writable: false,
//     value: "Mofak Kharul Islam"
// })




// function Person(name) {
//     this.name = name
// }

// Person.prototype.pi = 3.1416

// let per1 = new Person('Mks')
// let per2 = new Person('Tamin')

// console.log(per1);
// console.log(per2);

// // console.log(Object.getPrototypeOf(per1));
// // console.log(Person.prototype);


// let arr = []

// Array.prototype.myFun = function () { }

// console.log(arr);






function Square(width) {
    this.width = width
}

Square.prototype = {
    draw: function () {
        console.log('Draw');
    },
    toString: function () {
        return 'My width is : ' + this.width
    }
}

let sqr1 = new Square(59)
console.log(sqr1.draw());


let sqr2 = new Square(69)

console.log(sqr1.draw());
console.log(sqr2.toString());






