const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Nest.js']


// for(let i = 0; i < tecnologias.length; i++){
//     console.log(tecnologias[i] )  //Crece de acuerdo a lo que el usuario va a hacer en la aplicaion
// }

//forEach
const arrayforEach = tecnologias.forEach(function(tech) {
    console.log(tech)
})

//map
const arrayMap = tecnologias.map(function(tech){
    return "hola"
})

console.log(arrayforEach) //genra undefinded
console.log(arrayMap)

//for ... of
for(let tech of tecnologias) {
    console.log(tech)            //sintaxis más corta
}