function sum(a, b) {
    let sume = a + b
    console.log(sume);
}

sum(49, 39)
sum(40, 20)
sum(67, 46)

console.log('');


let arr = [2, 3, 5, 43, 55]
let arr1 = [22, 33, 65, 43, 55]


function arrSum(arr) {
    let arrSumResutl = 0
    for (let i = 0; i < arr.length; i++) {
        arrSumResutl += arr[i]
    }
    console.log(arrSumResutl);
}

arrSum(arr)
arrSum(arr1)