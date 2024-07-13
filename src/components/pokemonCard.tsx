import useFetch from "../hooks/useFetch";
import LoaderComponent from "./loader";
import { Card, CardDescription, CardHeader } from "./ui/card";

const PokemonCard = ({ pokemon }: { pokemon: PokemonType1 }) => {
  const { data, loading } = useFetch<PokemonType2>(pokemon.url);

  return (
    <Card className="flex flex-col items-center py-4 shadow-md">
      <CardHeader>
        {loading ? (
          <LoaderComponent />
        ) : (
          <img
            className="size-14"
            src={
              data?.sprites?.other?.["official-artwork"]
                ?.front_default as string
            }
            alt="pokemon-img"
          />
        )}
      </CardHeader>
      <CardDescription>
        <h3 className="font-extrabold text-zinc-900">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </h3>
      </CardDescription>
    </Card>
  );
};

export default PokemonCard;
