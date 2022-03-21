//filtra el array segun alguna funcion o condicion

const autos = [
    {   modelo: 'gol',
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

const array_autos1 = autos.filter(n => n.año > 01)
console.log(array_autos1)


const autosNoNegros = autos.filter(n => n.color !== 'negro')
console.log(array_autos1)



