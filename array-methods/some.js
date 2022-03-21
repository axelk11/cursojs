/*
devuelve un boolean si al menos existe un elemento qe cumpla la condicion
*/

const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const existe = users.some((user) => user.uid === 2);
console.log(existe);