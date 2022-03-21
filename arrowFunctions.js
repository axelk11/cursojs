
//Forma 1
const nroAzar = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min)	
}

//Forma 2

const nroAzar = (min, max) =>  Math.floor(Math.random() * (max - min) + min)	


//Forma 3

const nroAzar = max =>  Math.floor(Math.random() * (max - min) + min)	



const nroAzar = (min=1, max=100) =>  Math.floor(Math.random() * (max - min) + min)	
