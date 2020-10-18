// function add(a, b, d) {
//     return a + b + d
// }


//Currying function

function currying(a) {
    return function (b) {
        return function (d) {
            return a + b + d
        }
    }
}

let result = currying(4)(4)(6)
console.log(result);