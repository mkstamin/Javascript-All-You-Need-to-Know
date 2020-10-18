
let postForm = document.getElementById('post-form')
let postList = document.getElementById('posts')

const URL = 'https://jsonplaceholder.typicode.com/posts'

postForm.addEventListener('click', function (e) {///why i used from id here why not btn id
    e.preventDefault()

    let title = this.title.value || undefined
    let body = this.body.value || undefined

    if (title && body) {
        let postObj = {
            userId: 100,
            title,
            body
        }
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/JSON'
            },
            body: JSON.stringify(postObj)
        })

            .then(res => res.json())
            .then(post => {
                let item = creatListItems(post)
                postList.appendChild(item)
                this.reset()
            })
            .catch(e => console.log(e.message))

    }

})

function creatListItems(item) {
    let li = document.createElement('li')
    li.className = 'list-group-item text-light bg-secondary'
    li.innerHTML = `${item.title}.${item.body} is writen by ${item.userId}`

    return li
}


