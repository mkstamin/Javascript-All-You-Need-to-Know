let arr = [3, 45, 64, 25, 6, 7, 5, 9]


// let result = arr.find(function (value, index) {
//     // console.log(value);
//     // console.log(index);
//     // console.log('');
//     return value == 45
// })
// console.log(result);


// let result = arr.findIndex(function (value) {
//     return value == 6
// })
// console.log(result);



function myFind(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            // return arr[i]
            return i
        }
    }
}

let result = myFind(arr, function (value) {
    return value == 5
})

console.log(result);