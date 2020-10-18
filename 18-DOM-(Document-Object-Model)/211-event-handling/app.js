let name = document.getElementById('name')

name.addEventListener('keyup', function (e) {
    document.getElementById('show-name').innerHTML = `Your name is  ${e.target.value}`
    if (e.key == 'Enter') {
        // document.getElementById('show-name').innerHTML = e.target.value
        e.target.value = ''
    }
})