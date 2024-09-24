const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : false
}

const cliente = {
    nombre : "Juan",
    premium : true,
}

// //con 3 puntos se agrega un objeto dentro de oro objeto
// const carrito = {
//     cantidad: 1,
//     ...producto // spread operator
// }

const nuevoObjeto = {
    ...producto,
    ...cliente,
}
console.log(nuevoObjeto)

const nuevoObjeto2 = Object.assign(producto, cliente)
console.log(nuevoObjeto2)