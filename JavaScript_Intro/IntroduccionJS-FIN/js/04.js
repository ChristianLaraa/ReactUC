//Objeto es una conexion de propiedades

//Generar los objetos
const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : false
}
console.log(producto)
console.table(producto)

//acceder a los valores
console.log(producto.nombre)

// const nombre = producto.nombre
// const precio = producto.precio
// const disponible = producto.disponible
// console.log(nombre)
// console.log(precio)
// console.log(disponible)

const { nombre, precio, disponible } = producto
console.log(producto)

//Object literal enhacement
const autenticado = true
const usuario = "Juan"

const nuevoObjeto = {
    autenticado : autenticado,
    usuario : usuario
}
console.log(nuevoObjeto)