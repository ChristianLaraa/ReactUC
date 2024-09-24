//Objetos manipulacion

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : false
}

// Object.freeze(producto)
Object.seal(producto)

//asignacion con = fuera de la variable
producto.disponible = true

producto.imagen = 'imagen.jpg'

console.log(producto)

//eliminacion de propiedades
delete producto.precio

console.log(producto)

