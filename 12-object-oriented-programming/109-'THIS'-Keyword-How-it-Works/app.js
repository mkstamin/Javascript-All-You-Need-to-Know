
let newObj = {
    name: 'Tamin',
    age: 24,

    myFunc: function () {
        console.log(`My name is ${this.name} && I am ${this.age} years Old`);
        this.myFunc2()
    },
    myFunc2: function () {
        console.log('Hello');
        console.log(`My name is ${this.name} && I am ${this.age} years Old`);
    },
}

newObj.myFunc()


let anotherNewObj = {
    name: 'Mks Tamin',
    age: 44,

    print: newObj.myFunc2 //newObj ar myFunc2 ta nije anotherNewObj kore anotherNewObj ar property and methodes assign kore diche
}
console.log(anotherNewObj.print);
anotherNewObj.print()


