//funcion declarativa

function nroAleatorio(min, max){
	return Math.floor(Math.random() * (max - min) + min)
}

//console.log(nroAleatorio(0, 11));


//funcion expresada

const nroAlAzar = function(min, max){
	return Math.floor(Math.random() * (max - min) + min)	
}


console.log(nroAlAzar(0, 20));
