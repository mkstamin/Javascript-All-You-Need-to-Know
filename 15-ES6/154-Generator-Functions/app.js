let obj = {
    a: 20,
    b: 39,
    [Symbol.iterator]: function* () {
        let currentValue = this.a
        while (currentValue <= this.b) {
            yield currentValue++
        }
    }
}

let ite = obj[Symbol.iterator]()
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());


const arr = [1, 2, 4, 5, 6, 7]

function* generator(collection) {
    for (let i = 0; i <= collection.length; i++) {
        yield collection[i]
    }
}


let it = generator(arr)

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());