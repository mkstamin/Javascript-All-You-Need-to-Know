//rest opertor

// function sum(...res) {
//     return res.reduce((pre, cur) => {
//         return pre + cur
//     })
// }

// console.log(sum(1, 2, 4, 5, 6, 8));
// console.log(sum(14, 23, 44, 54, 68, 83));


// function demo(a, b, ...res) {
//     console.log('a =', a);
//     console.log('b =', b);
//     console.log('res =', res);
//     console.log('res =', res[2]);
// }

// demo('one', 'two', 'three', 'mks', 'Tamin')



//spread operator

const num = [1, 2, 4, 5, 6]

function sum(a, b, c) {
    return a + b + c
}

console.log(sum(...num));

let obj1 = {
    foo: 'bar',
    x: 42
};

let obj2 = { ...obj1 }

console.log(obj2);