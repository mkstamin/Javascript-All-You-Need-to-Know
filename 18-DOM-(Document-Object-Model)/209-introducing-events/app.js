let btn = document.getElementById('btn')

// btn.onclick = function (e) {
//     console.log(e);
// }

let list = document.getElementById('list')

btn.addEventListener('click', function (e) {
    let items = list.lastElementChild.cloneNode(true)
    items.innerHTML = 'New Items'
    list.appendChild(items)
})

    // ;[...list.children].forEach((item) => {
    //     item.addEventListener('click', function () {
    //         alert('Hello')
    //     })
    // })

let box = document.getElementById('box')
box.addEventListener('mousemove', function (e) {
    document.getElementById('x-value').innerHTML = e.offsetX
    document.getElementById('y-value').innerHTML = e.offsetY
    if (e.offsetX === 50 && e.offsetY === 50) {
        btn.classList.add('bg-warning')
    }
})