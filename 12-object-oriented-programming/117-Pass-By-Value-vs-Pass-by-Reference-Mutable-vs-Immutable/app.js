//Pass-By-Value-vs-Pass-by-Reference-Mutable-vs-Immutable

//premitive data do not change by Function body.premitive data(number,string,null,undefine etc)
let a = 34
function change(a) {
    a = a + 20
    console.log(a);
}
change(a)
console.log(a);

//if we pass any object as a argument in a function  then function body can chang the data
let obj = {
    a: 20,
    b: 30
}

function newChange(obj) {
    obj.a = obj.a + 20
    obj.b = obj.b + 30
    console.log(obj);
}

newChange(obj)
console.log(obj);