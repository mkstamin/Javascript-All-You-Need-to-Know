let obj = {
    a: 10,
    b: 20,
    c: 50
}

// console.log('a' in obj);
// console.log('d' in obj);


for (let i in obj) {
    //console.log(i);
    console.log(i + ':' + obj[i]);
}