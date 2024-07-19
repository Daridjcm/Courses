let numeritos = [5, 5, 10]
function suma(...argsNumeros) {
    let result = argsNumeros.reduce((a, b) => a + b);
    console.log(result)
};
suma(...numeritos);

const personaje = {
    nombre: 'John',
    apellido: 'Doe',
    alergias: {
        frutas: false,
        pescado: true,
        lactosa: false,
        trigo: true
    },
};

const dirección = {
    calle: 'Calle principal',
    número: 234,
    ciudad: 'Madrid',
    pais: 'Francia',
};

const persona = {
    ...personaje,
    // * Solución 1 del Spread
    // nombre: 'Jose',
    edad: 45,
    ...dirección,
};

// No se mostrará en la copia Spread
personaje.nombre = 'Jose';
// Se mostrará en la copia Spread
personaje.alergias.frutas = true

// * Solución 2 del Spread
// persona.nombre = 'Jose'

console.log(persona);  
