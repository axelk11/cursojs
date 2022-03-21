const carrito = [];
let confirmacion2 = true;
let n=0;

if (window.confirm("Queres comprar helado?")){

	while(confirmacion2 == true){

			carrito[n] = prompt("que helado te queres comprar?")
			n++;
			confirmacion2 = window.confirm("Queres volver comprar helado?");

	}
	
	console.log(`oka pa , este es tu carrito`);		
	for (i=0; i<carrito.length; i++){
		console.log(carrito[i]);
	}
}

else {
		console.log(`oka pa , este es tu carrito`);		
			for (i=0; i<carrito.length; i++){
				console.log(carrito[i]);
			}
}