let btn = document.getElementById('btn')
let postList = document.getElementById('list')

const URL = 'https://jsonplaceholder.typicode.com/posts'


btn.addEventListener('click', function () {
    fetch(URL)
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                let listItem = creatListItems(post)
                postList.appendChild(listItem)
            })
        })
        .catch(e => console.log(e.message))
})


function creatListItems(item) {
    let li = document.createElement('li')
    li.className = 'list-group-item text-light bg-secondary'
    li.innerHTML = item.title

    return li
}


