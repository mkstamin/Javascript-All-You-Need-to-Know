//Factory Function
function createCircle(radius) {
    return {
        radius,//accrding to ES6 radius===radius:radius
        draw: function () {
            console.log(this.radius * this.radius);
        }
    }
}

let circle = createCircle(2)
circle.draw()

//Constructor Function
function Circle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log(this.radius * this.radius);
    }
}

let anotherCircle = new Circle(6)
anotherCircle.draw()


let str = new String('Mks Tamin')
//console.log(str[1]);
//console.dir(str);
console.log('My str is ' + str);