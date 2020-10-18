//Object-literal
let newObj = {
    name: 'Tamin',
    age: 24,

    myFunc: function () {
        console.log(`My name is ${this.name} && I am ${this.age} years Old`);
    },
}

newObj.myFunc()

newObj.name = 'Karim'
newObj.age = 30

newObj.myFunc()


