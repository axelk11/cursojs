const auto = {
	modelo: 'gol',
	año: 2000,
	marca: 'vw',
	puertas: 4,
	objetoAnidado: {
		prop1: 'asd',
		prop2: 'asd2',
		objAnidado2: {
			property1: 'propiedad del objeto anida2',
			property2: 'aaa'
		}
	}

}

//acceder

console.log(auto.objetoAnidado.objAnidado2.property1);

//encadenamiento opcional ?
//consulta si la propiedad esta definida

console.log(auto.objetoAnidado?.objAnidado2?.property1);
