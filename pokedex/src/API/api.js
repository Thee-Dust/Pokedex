export const fetchPokemonData = async () => {
  const pokemonCount = 898;
  const promises = [];
  for(let i = 1; i <= pokemonCount; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
    const response = await fetch(url);
    const data = await response.json();
    await promises.push(data);
  }
  console.log(promises)
  return promises
}

export const getPokemonData = async () => {
  const response = await Promise.all(fetchPokemonData());
  const pokemonData = await response.map(pokemon => ({
      name: pokemon.name,
      id: pokemon.id,
      image: pokemon.sprites['front_default'],
      type: pokemon.types.map(type => type.type.name).join(', ')
  }))
  return pokemonData;
}

