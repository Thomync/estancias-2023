//console.log('Hola mundo')

/* Variables dinámicas

let firstName = 'Mario'
firstName = 24

console.log(firstName)

////////////////////////// Variables mutables e inmutables

const firstName = 'Mario'
firstName.toUpperCase()
const firstNameU = firstName.toUpperCase()

console.log(firstName)
console.log(firstNameU)

//////////////// Lo mismo pero con arrays

const list = []
//list.push(1)
list.concat(157)
const anotherList = list.concat(157)

console.log(list[0])
console.log(anotherList)

////////////////// Uso de variables dinámicas con arrays

const persona = {
    name: 'Sayra',
    age: 22,
    height: 1.67,
    isWorkingStudying: [true, true]
}

console.log(persona.name)
console.log(persona.isWorkingStudying[1])

const field = 'height'

console.log(persona[field])

*/ //  Javascript es parecido a Java en cuando al manejo de los métodos
   //  y paradigmas

const suma = (op1, op2) => {
    console.log(op1)
    console.log(op2)
    return op1 + op2
}

console.log(suma(1,2))