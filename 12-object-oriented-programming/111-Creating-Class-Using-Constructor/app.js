
let Rectangle = function (width, height) {
    this.width = width
    this.height = height

    this.draw = function () {
        console.log('I am a rectangle');
        this.printProoerties()
        console.log(this);
    }
    this.printProoerties = function () {
        console.log(`My Width is ${this.width}`);
        console.log(`My Height is ${this.height}`);
    }
}

let recOne = new Rectangle(56, 66)
recOne.draw()

