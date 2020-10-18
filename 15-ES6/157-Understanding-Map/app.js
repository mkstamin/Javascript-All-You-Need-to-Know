let myMap = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
])

let keyString = 'a string'
let keyObj = {}
let keyFunc = function () { }

myMap.set(keyString, "value associated with 'a string'")
myMap.set(keyObj, 'value associated with keyObj')
myMap.set(keyFunc, 'value associated with keyFunc')

console.log(myMap);

// console.log(myMap.get(keyString));


// let kye = myMap.keys();
// let valu = myMap.values();

// for (let v of kye) {
//     console.log(v);
// }
// for (let v of valu) {
//     console.log(v);
// }

for (let [key, value] of myMap) {
    console.log(key + ' = ' + value)
}


// myMap.forEach(function (value, key) {
//     console.log(key + ' = ' + value)
// })