const saldo = 1000
const pagar = 1200
const tarjeta = true

/**
 * Logical or y Logical And
 * || or - al menos una se cumpla
 *  and - todas se cumplan
 */

if(saldo > pagar || tarjeta){
    console.log('Puedes pagar')
} 
else {
    console.log('No puedes pagar')
}