// let arr = [2, 3, 4, 5, 6, 7]
// console.log(arr);

let mySet = new Set()
mySet.add('5')
mySet.add(49)
mySet.add(true)
mySet.add('mKS tAMIN')
// mySet.add({ a: 1, b: 2 })

// console.log(mySet.has('5'));
// console.log(mySet.clear());
// console.log(mySet.delete('5'));
// console.log(mySet.entries());

// let setEntr = mySet.entries()

let kyeItera = mySet.entries()

// console.log(kyeItera.next());
// console.log(kyeItera.next());
// console.log(kyeItera.next());

for (let v of mySet) {
    console.log(v);
}