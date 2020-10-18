let item = document.getElementsByTagName('li')

// let items = Array.from(item)
// let items = Array.prototype.slice.apply(item)
let items = [...item]

// console.log(items);

items.forEach((li, ind) => {
    let text = li.innerHTML
    li.innerHTML = `(${ind + 1}) ${text}`
})