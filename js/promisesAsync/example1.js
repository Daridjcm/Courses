const datos = [
  { id: 1, title: 'Iron Man', year: 2008 }, 
  { id: 2, title: 'Spiderman: Homecoming', year: 2017 }, 
  { id: 3, title: 'Avengers: Endgame', year: 2019 },
  { id: 4, title: 'Spider-Man', year: 2002 },
];

// Promises
const getDatos = () => {
  return new Promise((resolve, reject) => {
    if (datos.length === 0) {
      reject(new Error('No existen datos'));
    }
    setTimeout(() => {
      resolve(datos);
    }, 1500);
  })
}

// * La función getDatos se llama y se utiliza el método then para procesar el resultado de la promesa. En este caso, se imprime el resultado en la consola.
getDatos().then((datos) => console.log(datos));

// Async / Await
async function fetchingData() {
  try {
    const datosFetched = await getDatos();
    console.log(datosFetched);
  } catch (err) {
    // * Trae el error de la promesa que se haya declarado, en este caso 'No existen datos'.
    console.log(err.message);
  }
}
fetchingData();