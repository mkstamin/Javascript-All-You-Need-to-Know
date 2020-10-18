const obj = {
    a: 20,
    name: 'Mks Tamin',
    age: 24,
    obj2: {
        city: 'Dhaka',
        country: 'BD'
    }
}

const { a, age, name, obj2: { city, country } } = obj

console.log(a, age, city);





const arrr = [1, 3, 4, 5, 6]

const [x, y, , , z] = arrr

console.log(x, y, z);