//let arr = [2, 32, 34, 5, 56, 65]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let eve = ''

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         //console.log(arr[i]);
//         eve += arr[i] + ','
//     }
// }

//console.log('The Event Numbers are : ' + eve);

let arr = [2, 32, 34, 5, 56, 65]
let sum = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === '0') {
        sum += arr[i];
    }
}
console.log(sum);