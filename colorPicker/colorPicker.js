const btnVisualizar = document.querySelector("#btnVisualizar");
const inputColor = document.querySelector("#inputColor");
const parrafo = document.querySelector("#parrafo");
const tarjeta = document.querySelector("#tarjeta");

console.log(tarjeta);

btnVisualizar.addEventListener("click", () =>{
    parrafo.textContent = inputColor.value;
    tarjeta.style.backgroundColor = inputColor.value;
    navigator.clipboard
        .writeText(inputColor.value)
        .then(() => console.log("texto copiado"))
        .catch((e) => console.log(e));
});
