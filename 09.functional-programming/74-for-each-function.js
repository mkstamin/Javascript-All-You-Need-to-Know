let arr = [4, 5, 6, 7, 8, 3]

// let sum = 0
// arr.forEach(function (value, index, arr) {
//     //console.log(value, index, arr);
//     sum += value
// })

// console.log(sum);


function forEach(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr)
    }
}
let sum = 0
forEach(arr, function (value, index, arr) {
    console.log(value, index, arr);
    //sum += value
})

//console.log(sum);