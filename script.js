const poke_container = document.getElementById("poke_container");
const pokemon_number = 50;

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_number; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createCard(pokemon);
};
function createCard(pokemon) {
  const pokemonEl = document.createElement("div");
  pokemonEl.className = "pokemon";
  var abil = pokemon.abilities[0].ability;
  const pokeInnerHTML = `
  <div>
  <h2>Name :${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2> <br>
  Abilities <ul>
  <li>${pokemon.abilities[0].ability.name}</li>
  <li>${pokemon.abilities[1].ability.name}</li>
  </ul><br>
  Moves <ul class='moves'>
  <li>${pokemon.moves[0].move.name}</li>
  <li>${pokemon.moves[1].move.name}</li>
  <li>${pokemon.moves[2].move.name}</li>
  <li>${pokemon.moves[3].move.name}</li>
  <li>${pokemon.moves[4].move.name}</li>
  <li>${pokemon.moves[5].move.name}</li>
  <li>${pokemon.moves[6].move.name}</li>
  <li>${pokemon.moves[7].move.name}</li>
  <li>${pokemon.moves[8].move.name}</li>
  </ul><br>
  
  Weight: ${pokemon.weight}
  </div>
  `;
//   var list = document.getElementById(".moves");
//   pokemon.moves.forEach((obj) => {
//     var li = document.createElement("LI");
//     li.innerText = obj.move.name;
//     list.append(li);
//   });
  pokemonEl.innerHTML = pokeInnerHTML;
  poke_container.appendChild(pokemonEl);
}

fetchPokemons();
