let add = function (a, b) {
    return a + b
}

console.log(add(20, 69));

setTimeout(function () {
    console.log('Call after 3 second !');
}, 3000)

let anotherAdd = add
console.log(anotherAdd(58, 343));