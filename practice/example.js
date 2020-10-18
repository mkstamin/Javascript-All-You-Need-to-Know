//This inside global scope
// let a = this
// console.log(a);

// this.name = "Jon Do"
// console.log(window.name);


//this inside function
// function demo() {
//     console.log(this);
// }
// demo()


//this inside constractor function
// let Demo = function () {
//     console.log(this);
// }
// let one = new Demo()


//this inside cobject methods



//this inside inner-function

let person = {
    name: 'Tamin',
    age: 25,
    demo: function () {
        console.log(this);
        console.log(this.age);
        let innerDemo = function () {
            console.log(this);
            console.log(this.name);
        }                              //.bind(this)

        innerDemo()
    }
}
person.demo()



