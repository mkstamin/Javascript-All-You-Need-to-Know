
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


// let Circle = new Function('radius', `
//     this.radius = radius
//     this.draw = function () {
//         console.log(this.radius * this.radius);
//     }
// `)

// let newObj = new Circle(4)
// console.log(newObj);


function MyFun(c, name) {
    console.log(this);
    console.log(this.a + this.b + c + ' ' + name);
}

//call
MyFun.call({ a: 40, b: 30 }, 44, 'Mks Tamin')
//MyFun.call({ a: 440, b: 340 })

//apply
MyFun.apply({ a: 40, b: 30 }, [44, 'Mks Tamin'])
//MyFun.apply({ a: 40, b: 30 })

//bind
// let testBind = MyFun.bind({ a: 40, b: 30 }, 44, 'Mks Tamin')
// testBind()
let testBind = MyFun.bind({ a: 40, b: 30 })
testBind(44, 'Tamin')