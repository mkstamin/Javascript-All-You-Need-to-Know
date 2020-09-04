let obj = {
    x: 40,
    y: 30,
    z: 49
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

let obj2 = Object.assign({}, obj)
obj2.x = 32

console.log(obj);
console.log(obj2);