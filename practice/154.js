

let obj = {
    str: 1,
    end: 10,
    [Symbol.iterator]: function () {
        let currVal = this.str
        const self = this
        return {
            next() {
                return {
                    done: currVal > self.end,
                    value: currVal++
                }
            }
        }
    }
}

for (let v of obj) {
    console.log(v);
}