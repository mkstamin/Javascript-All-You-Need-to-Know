
// //Constructor Function
// function Circle(radius) {
//     this.radius = radius
//     this.draw = function () {
//         console.log(this.radius * this.radius);
//     }
// }

// let anotherCircle = new Circle(6)
// anotherCircle.draw()


// let str = new String('Mks Tamin')
// //console.log(str[1]);
// //console.dir(str);
// console.log('My str is ' + str);


let Circle = new Function('radius', `
    this.radius = radius
    this.draw = function () {
        console.log(this.radius * this.radius);
    }
`)

let newObj = new Circle(4)
console.log(newObj);