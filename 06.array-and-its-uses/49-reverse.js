let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


for (let i = 0; i < (arr.length / 2); i++) {
    let tem = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = tem
}

console.log(arr);

console.log(arr.reverse());