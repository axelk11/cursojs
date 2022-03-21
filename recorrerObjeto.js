const humano = {
	nombre: 'pelotudo',
	app: 'cordobes,',
	desempleado: true,
	discapacidades: ['ser tonto', 'retardo'],
	habilidades : {
		dormir: 10,
		paja: 10
	}

}

/* FOR IN
for(let propiedad in humano){
	console.log(humano[propiedad]);
}

*/

//object.values() devuelve un array con las propiedades enumeradas
console.log(Object.values(humano));
