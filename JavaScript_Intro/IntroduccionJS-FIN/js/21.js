//Ternarios
const auth = true

const saldo = 1000
const pagar = 1200
const tarjeta = true

// if(auth) {
//     console.log('Usuario autenticado')
// } else {
//     console.log('No autenticado, ir a Login')
// }

auth ? 
    console.log('Usuario autenticado') :
    console.log("No autenticado, regrea a Login")

saldo > pagar || tarjeta ? 
    console.log('Si se puede pagar') : 
    console.log('No, no se puede pagar')

