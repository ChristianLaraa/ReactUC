// Template Strings y Concatenacion de valores

const producto = "Tablet de 12 pulgadas"
const precio = 400
const marca = "Oranga"

console.log('El producto es : ' + producto) // con el signo +
console.log(`El producto es: ${producto}`)


console.log(producto + "$" + precio + " Dolares, marca: " + marca)

console.log(`${producto} $${precio} Dolares, marca: ${marca}`) //Esto es una buena implementacion
