const array = [1, 2, 3, 4, 5];

// entries(): Devuelve un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice del array
const entries = array.entries();
for (let entry of entries) {
    console.log(entry);
};

// keys(): Devuelve un nuevo objeto Array Iterator que contiene las claves de índice para cada índice del array
const keys = array.keys();
for (let key of keys) {
    console.log(key);
};

// values(): Devuelve un nuevo objeto Array Iterator que contiene los valores para cada índice del array
const values = array.values();
for (let value of values) {
    console.log(value);
};