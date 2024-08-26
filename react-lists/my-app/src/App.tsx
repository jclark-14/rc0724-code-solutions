import './App.css';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' },
];

function App() {
  function PokemonList() {
    const pokemonList = pokedex.map((pokemon) => (
      <li key={pokemon.number}>{pokemon.name}</li>
    ));
    return <ul>{pokemonList}</ul>;
  }

  return <PokemonList />;
}

export default App;
