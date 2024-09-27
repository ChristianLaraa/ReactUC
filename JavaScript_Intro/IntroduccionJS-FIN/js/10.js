const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
// tecnologias[4] = 'Nest.js'  //si se agrega un indice que no existe lo genera, //no genera valores en blanco

tecnologias.push('Nest.js')

//AGREGAR VALORES EN UN ARREGLO
const nuevoArreglo = [...tecnologias, 'Nest.js']
const nuevoArreglo1 = ['Nest.js', ...tecnologias]  
console.table(tecnologias)

console.table(nuevoArreglo)
console.table(nuevoArreglo1)

//ELIMIBNAR VALORES EN UN ARREGLO
tecnologias.shift() //Elimina el primer elemento de un arreglo
//MUTACION
console.table(tecnologias)

const tecnologias2 = tecnologias.filter(function(tech) {    //Accede a cada elemento del arreglo
    if(tech === 'HTML') {
        return tech                     //Obtener elementos de acuerdo a condiciones
    }
})

console.log(tecnologias2)

const tecnologias3 = tecnologias.map(function(tech) {    //Accede a cada elemento del arreglo
        console.log(tech)                
})