
const contenedor = document.querySelector(".container");
contenedor.addEventListener("click", e =>{
//document.addEventListener("click", e =>{



//MEDIANTE ID

    if (e.target.id === "hijo") {
        console.log("diste click en el mijo");
    }

    if (e.target.id === "padre") {
        console.log("diste click en el padre");
    }

    if (e.target.id === "nieto") {
        console.log("diste click en el nieto");
    }

//MEDIANTE DATA
    /* if (e.target.dataset["div"] === "divPadre") {
        console.log("diste click en padre");
    }

    if (e.target.dataset["div"] === "divHijo") {
        console.log("diste click en hijo");
    }

    if (e.target.dataset["div"] === "divNieto") {
        console.log("diste click en nieto");
    } */
})