let form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    // console.log(this.elements[0]);
    // console.log(this['email']);
    let formData = {}
        ;[...this.elements].forEach(e => {
            if (e.type !== 'submit') {
                formData[e.name] = e.value
            }
        })
    console.log(formData);
    this.reset()
})