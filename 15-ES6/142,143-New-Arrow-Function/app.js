// let a = 10
// let arrFun = a => console.log(a * a);
// arrFun(a)



// let x = 2
// let y = 4
// let add = (x, y) => {
//     console.log(`x + y = ${x * y}`);
// }

// add(x, y)

let obj1 = {
    name: 'Mks Tamin',
    print: () => {
        console.log(this);
    }
}

obj1.print()//refar to window obj

let obj = {
    name: 'Mks Tamin',
    print: function () {
        setTimeout(() => {
            console.log(this);
        }, 1000)
    }
}

obj.print()//refar to ouer creat obj



