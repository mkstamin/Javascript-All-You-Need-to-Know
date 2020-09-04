let date = new Date()

console.log(typeof (date));


function myFirst(name, myCall) {
    let age = 24
    myCall(age)
    console.log(`My name is ${name}`);
}


function myCall(age) {
    console.log(`I am ${age} years old`);
}


myFirst('Mks Tamin', myCall)