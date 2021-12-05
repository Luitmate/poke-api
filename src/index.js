function mostrarListaPokemones(listaPokemones) {
    console.log('la lista de pokemones es', listaPokemones)
    const $lista = document.querySelector('.list-group')

    for(pokemon of listaPokemones) {
        let nuevoElementoLista = document.createElement('a')
        nuevoElementoLista.setAttribute("href", pokemon.url)
        nuevoElementoLista.setAttribute("class", "list-group-item list-group-item-action")
        nuevoElementoLista.textContent = pokemon.name
        $lista.appendChild(nuevoElementoLista)
    }
}


function iniciar() {
    const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/'
    fetch(POKEMON_URL)
        .then(response => response.json())   
        .then(response => {
            console.log(response)
            const listaPokemones = response.results
            mostrarListaPokemones(listaPokemones)
        })
}

iniciar()

