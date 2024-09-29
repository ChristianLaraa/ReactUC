const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
const numeros = [10, 20, 30]

// filter --

// const nuevoArray = tecnologias.filter(function(tech){
//         console.log(tech)
// })

const nuevoArray = tecnologias.filter(tech=> tech !== 'HTML' )   //arrow functions



const tecnologias2 = tecnologias.filter(function(tech){
    if(tech !== 'HTML'){
        return tech
    }
})

console.log(nuevoArray)
console.log(tecnologias2)

//INCLUDES  
const resultado = tecnologias.includes('CSS')

console.log(resultado)

const resultado2 = numeros.filter( numero => numero > 15)
if(resultado.length > 0){
    console.log('si hay elementos')
} else {
    console.log('No hay elementos')
}

console.log(resultado2)

//
const resultado3 = numeros.some( numero => numero > 15)
if(resultado.length > 0){
    console.log('si hay elementos')
} else {
    console.log('No hay elementos')
}


console.log(resultado3)

//Find 
const resultado4 = numeros.find( numero => numero > 20)
console.log(resultado4)

//Every
const resultado5 = numeros.every( numero => numero > 5)
console.log(resultado5)

//Reduce
const resultado6 = numeros.reduce((total, numero) =>{
    console.log(total)
    console.log(numero)   //funciona como acumulado

    return total + numero
}, 0)
console.log(resultado6)