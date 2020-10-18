let list = document.getElementById('list')

let firstChild = list.firstElementChild

setTimeout(() => {
    firstChild.innerHTML = firstChild.innerHTML + ' (Update)'
    firstChild.classList.add('bg-info', 'text-light')
}, 5000)

setTimeout(() => {
    list.lastElementChild.remove()
}, 3000)

