import { useEffect, useState } from "react";
import LoaderComponent from "./components/loader";
import PokemonCard from "./components/pokemonCard";
import { SearchBar } from "./components/searchBar";
import useFetch from "./hooks/useFetch";
import { searchPokemons } from "./lib/search";

interface ResponseInterface {
  count: number;
  next: string;
  prev: string;
  results: PokemonType1[];
}

function App() {
  const [pokemons, setPokemons] = useState<PokemonType1[] | undefined>(
    undefined
  );

  const { data, loading, error } = useFetch<ResponseInterface>(
    "https://pokeapi.co/api/v2/pokemon"
  );

  useEffect(() => {
    if (data?.results) {
      setPokemons(data.results);
    }
  }, [data?.results]);

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (data?.results) {
      setPokemons(searchPokemons(data.results, keyword));
    }
  }, [keyword, data?.results]);

  if (error) {
    console.error(error);
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className="h-full m-6">
      {loading ? (
        <LoaderComponent />
      ) : (
        <div className="flex flex-col gap-4">
          <SearchBar keyword={keyword} setKeyword={setKeyword} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {pokemons?.map((pokemon: PokemonType1) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
