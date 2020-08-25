//search data


let arr = [2, 45, 63, 56, 32, 645, 65, 43, 6]
let ser = 6
let isFalse = false
for (let i = 0; i < arr.length; i++) {
    let res = arr[i];
    //console.log(res);
    if (ser == res) {
        console.log(ser + ' Find INDEX at ' + i);
        isFalse = true
        break
    }
}
if (!isFalse) {
    console.log('Data Not Found');
}