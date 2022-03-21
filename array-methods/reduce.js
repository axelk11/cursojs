/* ejecuta una función reductora sobre cada elemento de un array, 
devolviendo como resultado un único valor.
*/

// REDUCE

const arregloN = [1,2,3,4]

const resultado = arregloN.reduce((acu, i) => acu + i)
console.log(resultado) 

// ARRAY PLANO CON CONCAT

const arrayN = [[1,2],[3,4],[5,6],];
console.log(arrayN)
const resultado2 = [].concat(...arrayN);
console.log(resultado2);

// O FLAT INSERTANDO POR PARAMETRO LOS NIVELES DE APLANAMIENTO

const resultado3 = arrayN.flat(2);
console.log(resultado3);