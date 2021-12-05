
function iniciar() {
    const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/'
    fetch(POKEMON_URL)
        .then(response => response.json())
        .then(response => console.log(response))
}

iniciar()
