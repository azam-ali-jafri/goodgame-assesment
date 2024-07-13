export const searchPokemons = (
  pokemons: PokemonType1[],
  keyword: string
): PokemonType1[] => {
  const lowercasedkeyword = keyword.toLowerCase();

  return pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(lowercasedkeyword)
  );
};
