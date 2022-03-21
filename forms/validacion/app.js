const formulario = document.querySelector('#form')
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;


/* const userName = document.querySelector('#userName')
const userMail = document.querySelector('#userMail') */


/* formulario.addEventListener('submit', e => {
    e.preventDefault();
    const nombre = userName.value;
    const email = userMail.value;

    console.log(nombre, email)

}); */

// FORMDATA

formulario.addEventListener('submit', e =>{
    e.preventDefault();
    const inputs = new FormData(formulario);

    console.log(inputs.get("userName"));
    console.log(inputs.get("userEmail"));

    for (let campo of inputs.values()) {
        console.log(campo);
    }

    for (let campo of inputs.entries()) {
        console.log(campo);
    }
})