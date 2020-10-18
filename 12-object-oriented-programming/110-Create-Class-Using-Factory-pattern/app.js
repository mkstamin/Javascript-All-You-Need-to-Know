
let creatRec = function (width, height) {
    return {
        width: width,
        height: height,

        draw: function () {
            console.log('I am a rectangle');
            this.printProoerties()
            console.log(this);
        },
        printProoerties: function () {
            console.log(`My Width is ${this.width}`);
            console.log(`My Height is ${this.height}`);
        }
    }
}

let recOne = creatRec(20, 5)
recOne.draw()
let recTwo = creatRec(60, 52)
recTwo.draw()