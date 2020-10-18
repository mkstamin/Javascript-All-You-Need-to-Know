
// let luckyNumber = 4 || 3
// let whileCondition = 1
// while (whileCondition) {
//     let randomNumber = Math.floor(Math.random() * 5 + 1)
//     console.log('randomNumber:', randomNumber)
//     if (randomNumber === luckyNumber) {
//         console.log('You have won')
//         console.log('randomNumber', randomNumber, 'luckyNumber', luckyNumber)
//         whileCondition = 0
//     } else {
//         console.log('You got ' + randomNumber)
//     }
// }


// let change 

// let luckyNumber = change || 4

// console.log(luckyNumber);


// let whileCondition = 1
// while (whileCondition) {
//     let randomNumber = Math.floor(Math.random() * 5 + 1)
//     console.log('randomNumber:', randomNumber)
//     if (randomNumber === luckyNumber) {
//         console.log('You have won')
//         console.log('randomNumber', randomNumber, 'luckyNumber', luckyNumber)
//         whileCondition = 0
//     } else {
//         console.log('You got ' + randomNumber)
//     }
// }


var arr = [35, 43, 56, 8, 89, 19, 16, 43, 56, 46, 54, 65, 4]
var find = 16
var isFound = false
var len = arr.length
for (i = 0; i < len; i++) {
    if (arr[i] === find) {
        console.log('data found and index number is: ' + i)
        isFound = true
        break;
    }
}
if (!isFound) {
    console.log('data not found')
}

