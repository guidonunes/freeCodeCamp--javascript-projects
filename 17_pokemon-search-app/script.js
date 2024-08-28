const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weightElement = document.getElementById('weight');
const heightElement = document.getElementById('height');
const spriteContainer = document.getElementById('sprite-container');
const typesElement = document.getElementById('types');
const hpElement = document.getElementById('hp');
const attackElement = document.getElementById('attack');
const defenseElement = document.getElementById('defense');
const specialAttackElement = document.getElementById('special-attack');
const specialDefenseElement = document.getElementById('special-defense');
const speedElement = document.getElementById('speed');


const proxyApi ='https://pokeapi-proxy.freecodecamp.rocks/api/pokemon';


// Function to sanitize user input
const sanitizeInput = (input) => {
  return input.toLowerCase().replace(/[^a-z0-9]/g, '');
}

const searchPokemon = async () => {
  try {
    const sanitizedInput = sanitizeInput(searchInput.value);

    const response = await fetch(`${proxyApi}/${sanitizedInput}`);

    if (!response.ok) {
      alert('Pokemon not found');
      return;
    }

    const data = await response.json();

    if(!data|| Object.keys(data).length === 0) {
      alert('Pokemon not found');
    } else {
      console.log(data);
    }
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
  }
}

searchInput.addEventListener('input', searchPokemon);
