const data = [{
    title: 'La idea de ti',
    year: 2024,
    id: 1,
    author: 'Amaya Ascunce'
}];

const getData = () => {
    return new Promise((resolve, reject) => {
        if (data.lenght === 0) {
            reject(new Error('Data is empty'));
        }
        setTimeout(() => {
            resolve(data);
        }, 2000);
    })
}

// Opción 1 de resolver una promesa
getData()
    .then((response) => console.log(response))
    .catch((err) => console.log(err.message));

// Opción 2 de resolver una promesa
async function fetchingData() {
    const book = await getData();
    console.log(book);
}
fetchingData();