// function sum(m) {
//     if (m === 1) {
//         return 1
//     }
//     return m + sum(m - 1)
// }

// console.log(sum(5))






function sum(m) {
    if (m === 1) {
        return 1
    }
    let sumOfM = m + sum(m - 1)
    return sumOfM
}

console.log(sum(5))


