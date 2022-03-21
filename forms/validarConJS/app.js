const formulario = document.querySelector('#form')
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

formulario.addEventListener('submit', e =>{
    e.preventDefault();
    const inputs = new FormData(formulario)

    if (regUserName.test(inputs.get("userName")) && regUserEmail.test(inputs.get("userMail"))){
        console.log("adentro el name")
    } else {
        console.log("nada name")
    }

})