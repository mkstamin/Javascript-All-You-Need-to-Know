let arr = [2, 32, 34, 5, 56, 65]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

let eve = ''

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        //console.log(arr[i]);
        eve += arr[i] + ','
    }
}

console.log('The Event Numbers are : ' + eve);



let sun = 0

for (let i = 0; i < arr.length; i++) {
    sun += arr[i];
}

console.log(sun);