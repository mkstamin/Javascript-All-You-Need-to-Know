const language = {
    set current(name) {
        this.log.push(name)
    },
    log: []
}

language.current = 'Eng'
language.current = 'Bangla'
language.current = 47
language.current = true


console.log(language.log);

// for (let i = 0; i < language.log.length; i++) {
//     console.log(language.log[i]);
// }



const obj = {
    log: ['a', 'b', 'c'],

    get latest() {
        if (this.log.length === 0) {
            return undefined
        }
        return this.log[this.log.length - 1]
    }
}

console.log(obj.latest);