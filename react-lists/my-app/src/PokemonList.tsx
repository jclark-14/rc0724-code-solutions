type Props = {
  pokedex: [
    {
      number: string;
      name: string;
    }
  ];
};

export function PokemonList({ pokedex }: Props) {
  const pokemonList = pokedex.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));
  return <ul>{pokemonList}</ul>;
}
