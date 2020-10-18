const arr = [2, 3, 4, 5, 6]

let iterate = arr[Symbol.iterator]()
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());


const str = 'MKS'

let iteratStr = str[Symbol.iterator]()
console.log(iteratStr.next());
console.log(iteratStr.next());
console.log(iteratStr.next());
console.log(iteratStr.next());