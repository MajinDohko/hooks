import './App.css';
import useFetchApi from './hooks/useFecthCharacters';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const { data: pokemon, loading: loadingPokemon, error: errorPokemon } = useFetchApi(urlPokemon);
  const { data: rickAndMorty, loading: loadingRick, error: errorRick } = useFetchApi(urlRick);

  return (
    <>
      <div className='character'>
        <h2>Personaje Pokémon</h2>
        {loadingPokemon && <p>Cargando...</p>}
        {errorPokemon && <p>Error: {errorPokemon}</p>}
        {pokemon && (
          <>
            <p>{pokemon.name}</p>
            <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
          </>
        )}
      </div>

      <div className='character'>
        <h2>Personaje Rick and Morty</h2>
        {loadingRick && <p>Cargando...</p>}
        {errorRick && <p>Error: {errorRick}</p>}
        {rickAndMorty && (
          <>
            <p>{rickAndMorty.name}</p>
            <img src={rickAndMorty.image} alt={rickAndMorty.name} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
