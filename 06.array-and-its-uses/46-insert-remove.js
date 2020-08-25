let arr = [1, 2, 3, 4, 8, 9]

console.log(arr.length);
//arr.push(7)
//arr.unshift(7)
arr.splice(4, 0, 5, 6, 7)

//arr.pop()
//arr.shift()
//arr.splice(3, 1)

arr.splice(3, 1, 44)

console.log(arr);

console.log(arr.length);