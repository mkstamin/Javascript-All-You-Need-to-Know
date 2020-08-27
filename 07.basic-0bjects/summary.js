//*************one****************


//object literal


// let obj = {}

// obj.x = 5

// console.log(obj);
// console.log(typeof (obj));


let obj = {
    x: 4,
    y: 5
}
obj.z = 6

console.log(obj);




// object contractor

let obj1 = Object()

obj1.xy = 30
console.log(obj1);


let obj2 = new Object()

obj2.xy = 50

console.log(obj2);




//***************two****************

let obj = {
    x: 10,
    y: 20,
    z: 30
}
let sum = obj.z + obj.y
console.log(obj.z);
console.log(sum);


//Square brackets/array notation

obj['has admin'] = true
console.log(obj);

let show = 'has admin'

console.log(obj[show]);




//***************three************


let obj = {
    x: 3,
    y: 4,
    z: 5
}


obj.y = 64
obj.xx = 47
console.log(obj);
//console.log(obj.a);


obj['x'] = 300
let chng = 'z'

obj[chng] = 500

console.log(obj);




//****************Four***************/



let obj = {
    x: 4,
    y: 5,
    z: 6
}

console.log(obj);

delete (obj.z)

console.log(obj);


//********************Five*********************/


let obj1 = {
    a: 10,
    b: 20
}

let obj2 = {
    a: 10,
    b: 20
}

console.log(obj1 === obj2);

if (obj1.a === obj2.a && obj1.b === obj2.b) {
    console.log(true);
} else {
    console.log(false);
}


console.log(obj1);
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));





//***************Six************** */


let obj = {
    a: 10,
    b: 20,
    c: 50
}

// console.log('a' in obj);
// console.log('d' in obj);


for (let i in obj) {
    //console.log(i);
    console.log(i + ':' + obj[i]);
}