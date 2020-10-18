const arr = [1, 2, 3, 4, 5]

function creaIterator(collection) {
    let i = 0
    return {
        next() {
            return {
                done: i >= collection.length,
                value: collection[i++]
            }
        }
    }
}


let iter = creaIterator(arr)
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.dir(iter.next);