/*devuelve el índice del primer elemento de un array que cumpla con la 
función de prueba proporcionada.En caso contrario devuelve - 1.
*/

const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const existe = users.findIndex((user) => user.uid === 4);
console.log(existe);