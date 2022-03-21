
const cuerpo = document.querySelector("#cuerpo");
// const element = document.createElement("div");
// cuerpo.textContent = "primer elementardo";
// cuerpo.appendChild("cuerpo");

const autos = ["gol", "corsa", "peugeot"];

/*
array.forEach((pais) =>{
    const li = document.createElement("li");
    li.textContent = pais;
    cuerpo.appendChild(li);
})
*/

autos.forEach(auto =>{
    cuerpo.innerHTML += `<li>${auto}</li>`;
});