let list = document.getElementById('list')

let firstChild = list.firstElementChild
let lastChild = list.lastElementChild

setTimeout(() => {
    firstChild.innerHTML = firstChild.innerHTML + ' (Update)'
    firstChild.classList.add('bg-info', 'text-light')
}, 5000)

setTimeout(() => {
    lastChild.remove()
}, 3000)



// let lastItem = lastChild.cloneNode(true) //or bellow
let lastItem = lastChild.cloneNode()
lastItem.innerHTML = 'Five'

lastItem.classList.add('bg-primary', 'text-light')
list.appendChild(lastItem)

