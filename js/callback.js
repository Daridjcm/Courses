// function sumar(a, b, callback) {
//     let result = a + b
// }
// sumar(1, 1, () => {
//     console.log(`La suma del numero ${a} y ${b} es de ${result}`);
// })


let a = 20;
let b = 25;
function add(callback) {
    let log = () => {
        console.log(`La suma del numero ${a} y ${b} es de ${callback()}.`);
    };
    log()
}
add(() => a + b);

// More practice of Callbacks.
function obtenerDatos(callback) {
    setTimeout(() => {
        const datos = { nombre: 'Juan', edad: 30 };
        callback(datos);
    }, 1000);
}
function mostrarDatos(datos) {
    console.log(`Nombre: ${datos.nombre}, Edad: ${datos.edad}`);
}

obtenerDatos(mostrarDatos);

function valorDePrueba(valor, prueba) {
    if(prueba(valor)) {
        return 'Pasó la prueba.';
    } else {
        return 'No pasó la prueba.';
    };
}
const esMayorQue = (numero) => numero > 0;
console.log(valorDePrueba(5, esMayorQue));