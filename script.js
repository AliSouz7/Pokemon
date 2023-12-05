function Buscarpokemon() {
    let pokemon = document.getElementById('pokemon').value;
    let url = "https://pokeapi.co/api/v2/pokemon/" + pokemon;

    fetch(url).then(
        function (response) {
            response.json().then(mostrar);
        }
    );
}

function mostrar(dados) {
    let resultado = document.getElementById('resultado');

    if (dados.erro) {
        resultado.innerHTML = 'Não foi possível buscar o pokemon.';
    } else {

        resultado.innerHTML = "<p>Nome: " + dados.name + '</p>' +
            "<p> Peso: " + dados.weight + "kg" + "</p>" +
            "<img src=" + dados.sprites.front_shiny + "></img>";

    }
}