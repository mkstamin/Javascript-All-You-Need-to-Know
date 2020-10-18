let p1 = createElement('p', 'lead text-justify text-info', `Lorem ipsum dolor sit
amet consectetur adipisicing elit.Qui, cumque libero.Iste
repellat odio illo sapiente unde repudiandae aperiam, ut
impedit pariatur, in ipsum.Excepturi repudiandae dolor
nam debitis ipsa.`)

let p2 = createElement('p', 'lead text-justify text-danger', `Lorem ipsum dolor sit
amet consectetur adipisicing elit.Qui, cumque libero.Iste
repellat odio illo sapiente unde repudiandae aperiam, ut
impedit pariatur, in ipsum.Excepturi repudiandae dolor
nam debitis ipsa.`)

let p3 = createElement('p', 'lead text-justify  text-success', `Lorem ipsum dolor sit
amet consectetur adipisicing elit.Qui, cumque libero.Iste
repellat odio illo sapiente unde repudiandae aperiam, ut
impedit pariatur, in ipsum.Excepturi repudiandae dolor
nam debitis ipsa.`)

let p4 = createElement('p', 'lead text-justify text-warning', `Lorem ipsum dolor sit
amet consectetur adipisicing elit.Qui, cumque libero.Iste
repellat odio illo sapiente unde repudiandae aperiam, ut
impedit pariatur, in ipsum.Excepturi repudiandae dolor
nam debitis ipsa.`)

let div = createElement('div', 'bg-dark p-3')

function createElement(tagName, className, innerHTML) {
    let tag = document.createElement(tagName)
    tag.className = className || ''
    tag.innerHTML = innerHTML || ''

    return tag
}

function append(parent, children) {
    children.forEach(child => parent.appendChild(child))
}

// const div = document.createElement('div')


append(div, [p1, p2, p3, p4])


let list = document.getElementById('list')
// list.insertAdjacentElement('beforebegin', div)
// list.insertAdjacentElement('afterbegin', div)
list.insertAdjacentElement('afterend', div)



// let newElement = document.querySelector('.container')
// newElement.appendChild(div)





