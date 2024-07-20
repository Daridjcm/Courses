const array = [1, 2, 3, 4, 5];

// Iteración
// forEach(): Ejecuta una función sobre cada elemento del array
array.forEach(element => {
    console.log(element);
});

// map(): Crea un nuevo array con los resultados de aplicar una función a cada elemento del array
const doubled = array.map(element => element * 2);
console.log(doubled);

// filter(): Crea un nuevo array con todos los elementos que pasen una prueba (proporcionada por una función)
const even = array.filter(element => element % 2 === 0);
console.log(even);

// reduce(): Aplica una función a un acumulador y a cada valor del array (de izquierda a derecha) para reducirlo a un solo valor
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

// reduceRight(): Aplica una función a un acumulador y a cada valor del array (de derecha a izquierda) para reducirlo a un solo valor
const sumRight = array.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumRight);

// some(): Comprueba si al menos un elemento en el array cumple con una condición
const hasEven = array.some(element => element % 2 === 0);
console.log(hasEven);

// every(): Comprueba si todos los elementos en el array cumplen con una condición
const allEven = array.every(element => element % 2 === 0);
console.log(allEven);

// find(): Devuelve el primer elemento del array que cumple con una condición
const firstEven = array.find(element => element % 2 === 0);
console.log(firstEven);

// findIndex(): Devuelve el índice del primer elemento del array que cumple con una condición
const firstEvenIndex = array.findIndex(element => element % 2 === 0);
console.log(firstEvenIndex);

// flatMap(): Mapea cada elemento y aplana el resultado en un nuevo array
const flatMapped = array.flatMap(x => [x, x * 2]);
console.log(flatMapped);