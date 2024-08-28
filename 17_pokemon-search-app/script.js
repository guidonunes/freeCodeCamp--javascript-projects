const searchInput = document.getElementById('search-input');



const proxyApi ='https://pokeapi-proxy.freecodecamp.rocks/api/pokemon';




const searchPokemon = async () => {
  try {
    const response = await fetch(`${proxyApi}/${searchInput.value}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

searchPokemon();
