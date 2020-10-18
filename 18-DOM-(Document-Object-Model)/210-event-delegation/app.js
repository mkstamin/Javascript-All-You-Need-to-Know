let btn = document.getElementById('btn')


let list = document.getElementById('list')

btn.addEventListener('click', function (e) {
    let items = list.lastElementChild.cloneNode(true)
    items.innerHTML = 'New Items'
    list.appendChild(items)
})



//======================================//
//         event-delegation             // 
//======================================//

// ;[...list.children].forEach((item) => {
//     item.addEventListener('click', function (e) {
//         e.target.remove()
//     })
// })


list.addEventListener('click', function (e) {
    if (this.contains(e.target)) {
        e.target.remove()
    }
})


let box = document.getElementById('box')
box.addEventListener('mousemove', function (e) {
    document.getElementById('x-value').innerHTML = e.offsetX
    document.getElementById('y-value').innerHTML = e.offsetY
    if (e.offsetX === 50 && e.offsetY === 50) {
        btn.classList.add('bg-warning')
    }
})