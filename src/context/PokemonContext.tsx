import {
  createContext, Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import PokemonApi from '../api/PokemonApi';
import { Pokemon } from '../interfaces/Pokemon';

export interface PokemonContextData {
  isLoading: boolean;
  searchInput: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setSearchInput: Dispatch<SetStateAction<string>>;
  pokedex: Array<Pokemon>;
}

const PokemonContext = createContext<PokemonContextData>({} as PokemonContextData,);

const PokemonProvider: React.FC = ({children}) => {
  const [pokedex, setPokedex] = useState<Array<Pokemon>>([]);
  const [pokedexFiltered, setPokedexFiltered] = useState<Array<Pokemon>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');

  const getPokemon = async () => {
    const allPokemon = [];
    setIsLoading(true);
    for (let i = 1; i <= 151; i++) {
      const out = await PokemonApi.getPokemonByNameId(i.toString());
      allPokemon.push(out);
    }
    setPokedex(allPokemon);
  }

  useEffect(() => {
    getPokemon();
    setPokedexFiltered(pokedex);
  }, []);

  /* useEffect(() => {
    
  }, [searchInput]); */
  
  return(
    <PokemonContext.Provider
      value={{
        isLoading,
        searchInput,
        setSearchInput,
        setIsLoading,
        pokedex,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };