/*devuelve una copia de una parte del array dentro de un nuevo array 
empezando por inicio hasta fin (fin no incluido). El array original 
no se modificará
*/

const arr = ["Cat", "Dog", "Tiger", "Zebra"];
//             0     [1      2]        3
const newArray = arr.slice(1, 3);

console.log(newArray);