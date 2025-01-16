
async function fetchPokemon() {
    try {
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
const pokemonSprite = data.sprites.front_default;
        const pokemonTypes = data.types.map(type => type.type.name);
        const pokemonAbilities = data.abilities.map(ability => ability.ability.name);
        const imgElement = document.getElementById('pokemonSprite');
        
        
        imgElement.src = pokemonSprite;
        imgElement.alt = pokemonName;
        imgElement.style.display = 'block';


        // document.getElementById('pokemonTypes').innerHTML = pokemonTypes.join(', ');
        // document.getElementById('pokemonAbilities').innerHTML = pokemonAbilities.join
    } catch (error) {
        console.error(error);
    }
}