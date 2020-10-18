// function sayHi(m) {
//     if (m == 1) {
//         return 1
//     }
//     console.log(m + sayHi(m - 1));
// }

// sayHi(5)


function sum(m) {
    if (m === 1) {
        return 1
    }
    return m + sum(m - 1)
}

let result = sum(3)
console.log(result);
