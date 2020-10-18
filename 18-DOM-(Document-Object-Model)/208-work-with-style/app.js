let title = document.getElementById('taitle')

// title.style.color = '#FFFF'
// title.style.background = 'gray'
// title.style.padding = '2%'

let styleObj = {
    color: '#FFFF',
    background: 'gray',
    padding: '2%'
}

// Object.assign(title.style, styleObj)

let list = document.getElementById('list')
    ;[...list.children].forEach(item => {
        Object.assign(item.style, styleObj)
    })