

let arr = [4, 5, 6, 7, 8, 3]



function myforEach(x, cb) {
    for (let i = 0; i < x.length; i++) {
        cb(x[i], i, x)
    }
}


// let sum = 0
myforEach(arr, function (value, index, arr) {
    console.log(value, index, arr);
    // sum += value
})

// console.log(sum);





