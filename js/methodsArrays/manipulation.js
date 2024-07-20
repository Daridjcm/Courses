const array = [1, 2, 3, 4, 5];

// Manipulación
// push(): Añade uno o más elementos al final de un array y devuelve la nueva longitud del array
array.push(6);
console.log(array);

// pop(): Elimina el último elemento de un array y lo devuelve
const lastElement = array.pop();
console.log(array);
console.log(lastElement);

// shift(): Elimina el primer elemento de un array y lo devuelve
const firstElement = array.shift();
console.log(array);
console.log(firstElement);

// unshift(): Añade uno o más elementos al principio de un array y devuelve la nueva longitud del array
array.unshift(0);
console.log(array);

// splice(): Cambia el contenido de un array eliminando, reemplazando o añadiendo elementos
array.splice(1, 2);
console.log(array);

// slice(): Devuelve una copia de una parte del array dentro de un nuevo array
const newArray = array.slice(1, 3);
console.log(newArray);
console.log(array);

// concat(): Se utiliza para unir dos o más arrays
const array2 = [6, 7, 8];
const combined = array.concat(array2);
console.log(combined);

// join(): Une todos los elementos de un array en una cadena y la devuelve
const joined = array.join('-');
console.log(joined);

// reverse(): Invierte el orden de los elementos en un array
array.reverse();
console.log(array);

// sort(): Ordena los elementos de un array y devuelve el array
array.sort();
console.log(array);

// copyWithin(): Copia una parte del array dentro del mismo array y lo devuelve sin modificar su longitud
const arrayCopy = [1, 2, 3, 4, 5];
arrayCopy.copyWithin(0, 3);
console.log(arrayCopy);

// fill(): Llena todos los elementos de un array con un valor estático
const filledArray = new Array(5).fill(0);
console.log(filledArray);
