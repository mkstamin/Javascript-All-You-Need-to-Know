//Hide-Private-Properties

let CreatRec = function (width, height) {
    this.width = width
    this.height = height

    let position = { //Hide-Private-Properties using let 
        x: 50,
        y: 40
    }

    let printProoerties = function () {  //Hide-Private-Properties using let
        console.log(`My Width is ${this.width}`);
        console.log(`My Height is ${this.height}`);
    }.bind(this)

    this.draw = function () {
        console.log(`x = ${position.x} and y = ${position.y}`);
        printProoerties()
    }
}

let recOne = new CreatRec(20, 5)
recOne.draw()