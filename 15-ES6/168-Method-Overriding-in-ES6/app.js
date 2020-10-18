class Demo {
    constructor() { }
    play() {
        console.log('Is playing............');
    }
}


class DemoTwo extends Demo {
    constructor() {
        super()
    }
    play() {
        console.log('Is play From DemonTwo....');
    }
}



let demon2 = new DemoTwo()
demon2.play()