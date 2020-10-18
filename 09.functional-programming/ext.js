let lukesFamily = {
    'Darth Vader': 'father',
    'Leia': "sister",
    'Han': 'brother in law',
    'R2D2': 'droid',
}

function relationship(member) {
    return `${member} is Luke's ${lukesFamily[member]}.`
}

let result = relationship

//akta akta kore ber korbe
console.log(result('Leia'));

console.log('');

//Sobgulan aksathe ber korbe
for (let m in lukesFamily) {
    console.log(result(m));
}