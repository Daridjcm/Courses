function countriesAPI() {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(response => {
        console.log(response)
    })
}
countriesAPI()

let p1 = document.getElementById('message1');
let p2 = document.getElementById('message1.1');
let btn = document.getElementById('btn');
let resResults;
btn.addEventListener('click', function () {
    callServer();
    // let rStringArr = resultString.map((t) => {
    //     return t
    // });
    // p2.innerHTML = resultString;
    let rStringArr = resResults.map(t => t.name)
    p2.innerHTML = rStringArr.join(', ');
});
function callServer() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(res => res.json())
        .then(response => {
            resResults = response.results;
            resResults.map((result) => {
                console.log(result.name)
            })
            resResults.length < 1 ? p1.innerHTML = 'No hay datos para mostrar.' : p1.innerHTML = 'Si hay datos para mostrar.';
        })
}


function handleInput() {
    const input = document.getElementById('demo').value;
    try {
        if (input === '') throw 'Input is empty';
        if (isNaN(input)) throw 'Not a number';
        if (input > 10) throw 'Too high';
        if (input < 5) throw 'Too low';
    } catch (err) {
        document.getElementById('message2').innerText = 'Error: ' + err;
    } finally {
        // Clean up or additional actions go here
        input.value = '';
    }
}