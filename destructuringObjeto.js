//desarmar objetos

const humano = {
	nombre: 'pelotudo',
	app: 'cordobes,',
	desempleado: true,
	discapacidades: ['ser tonto', 'retardo'],
	habilidades : {
		amigos: ["Cobarde", "Tímido", "Pegajoso"],
		dormir: 10,
		paja: 10
	}

}

const nombrePersona = humano.nombre;
console.log(nombrePersona);

const { nombre, apellido, habilidades } = humano;
console.log(nombre);
console.log(apellido);

//alias
const { nombre: nombreHumano, app: apellidoHumano, desempleado: laboralState, habilidades: habs } = humano;
console.log(nombreHumano, apellidoHumano, laboralState, habs);

//por defecto
const { nombre: nombreHumano2 ="sin nombre", app: apellidoHumano2="vacio", desempleado: laboralState2, habilidades: habs2 } = humano;
console.log(nombreHumano2, apellidoHumano2, laboralState2, habs2);


//desestructurar anidados
console.log("--------------------")
const {
    habilidades: { amigos },
} = humano;
console.log(amigos);
