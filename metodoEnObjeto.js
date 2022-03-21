const gato = {
    nombre: "Juan",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer: function (comida) {
        console.log(`El gato: ${gato.nombre} esta comiendo ${comida}`);
    }
};

gato.comer("wishkas");