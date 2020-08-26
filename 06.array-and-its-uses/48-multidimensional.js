let arr = [
    [1, 2, 8, 10, 80],
    [74, 88, 66, 77, 33, 55],
    [45, 87, 64, 845, 45]
]

//console.log(arr);
//console.log(arr[0][0]);
//console.log(arr[1][1]);



for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        let arry = arr[i][j];
        console.log('Element ' + i + ': ' + arry);
    }
}