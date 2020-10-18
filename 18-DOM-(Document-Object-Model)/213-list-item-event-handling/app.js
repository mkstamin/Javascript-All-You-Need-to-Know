let name = document.getElementById('name')

name.addEventListener('keyup', function (e) {
    document.getElementById('show-name').innerHTML = `Your name is  ${e.target.value}`
    if (e.key == 'Enter') {
        e.target.value = ''
    }
})


let skills = document.getElementsByName('skill')
let result = document.getElementById('result')

let checkedSkills = []

    ;[...skills].forEach((skill) => {
        skill.addEventListener('change', function (e) {
            if (e.target.checked) {
                checkedSkills.push(e.target.value)
                outPutSkills(result, checkedSkills)
            } else {
                let ind = checkedSkills.indexOf(e.target.value)
                checkedSkills.splice(ind, 1)
                outPutSkills(result, checkedSkills)
            }
        })
    })


function outPutSkills(parent, skills) {
    let result = ''
    skills.forEach((skill, index) => {
        result += `(${index + 1}) ${skill} `
    })
    parent.innerHTML = result
}




let list = document.getElementById('list')

list.addEventListener('dblclick', function (e) {
    if (this.contains(e.target)) {//what is contains and why i used this
        let innetText = e.target.innerHTML
        e.target.innerHTML = ''
        let inputBox = creatInput(innetText)
        e.target.appendChild(inputBox)

        inputBox.addEventListener('keypress', function (evn) {
            if (evn.key === 'Enter') {
                e.target.innerHTML = evn.target.value
            }
        })
    }
})

function creatInput(innetText) {
    let inp = document.createElement('input')
    inp.type = "text"
    inp.className = "form-control"
    inp.value = innetText//why it does not show value in input tag

    return inp
}