//devuelve el 1er ELEMENTO (ya sea un objeto o un elemento de un array comun) 
//qe cumple con la funcion

const autos = [
    {
        modelo: 'gol',
        año: 01,
        color: 'negro'
    },
    {
        modelo: 'corsa',
        año: 02,
        color: 'verde'
    },
    {
        modelo: 'vento',
        año: 03,
        color: 'azul'
    }
]

const array_autos1 = autos.find(n => n.año > 01)
console.log(array_autos1)


const autosNoNegros = autos.filter(n => n.color !== 'negro')
console.log(array_autos1)
