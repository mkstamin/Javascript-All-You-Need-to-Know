
function add(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}


//let res = add  //we can store the add() return value like this

let arr = [23, 43, 35, 54, 66]

let result = add(arr)

console.log(result);

console.log(35 + result);



function person(name, email) {
    return {
        name: name,
        email: email,
    }
}

let pOne = person('mks tamin', 'mkstamin@tamin.com')

console.log(pOne);