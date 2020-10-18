/// entries

let obj = {
    a: 10,
    b: 39,
    fun() { }
}

console.log(Object.entries(obj));


//fromEntries

let arr = [
    ['a', 10],
    ['d', 20]
]

console.log(Object.fromEntries(arr));