
function test(a, b, cb) {
    let c = a + b
    let d = a - b

    let result = cb(c, d)

    return result
}

test(20, 10, function (c, d) {
    console.log(c - d);
})





// function test(a, b) {
//     let c = a + b
//     let d = a - b

//     let result = res(c, d)

//     return result
// }

// function res(c, d) {
//     return console.log(c + d);
// }

// test(30, 20)




// function test(a, b, cb) {
//     let c = a + b
//     let d = a - b
//     let res = cb(c, d)
//     return res
// }

//*******************************/

// function mul(c, d) {
//     return c * d;
// }
// let result = test(10, 5, mul)

// console.log(result);

//*******************************/

// test(4, 6, function (c, d) {
//     let result = c * d
//     console.log(result);
// })

// let mod = test(20, 3, function (c, d) {
//     return c % d
// })

// console.log(mod);