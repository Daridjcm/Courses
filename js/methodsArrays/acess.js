const array = [1, 2, 3, 4, 5, 3];

// Acceso
// at(): Devuelve el elemento del array en el índice especificado
const thirdElement = array.at(2);
console.log(thirdElement);

// includes(): Comprueba si un array contiene un valor específico
const hasThree = array.includes(3);
console.log(hasThree);

// indexOf(): Devuelve el primer índice en el que se puede encontrar un elemento dado en el array, o -1 si no está presente
const index = array.indexOf(3);
console.log(index);

// lastIndexOf(): Devuelve el último índice en el que se puede encontrar un elemento dado en el array, o -1 si no está presente
const lastIndex = array.lastIndexOf(3);
console.log(lastIndex);