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

    ;[...skills].forEach((skill, index) => {
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