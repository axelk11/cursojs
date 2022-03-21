const frutas = [];

confirm()

frutas.push(prompt("ingrese una nueva fruta"));

console.log("estas son sus grutas:");
for(const frutita of frutas){
	console.log(frutita);
}