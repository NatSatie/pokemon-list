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
  pokedexFiltered: Array<Array<Pokemon>>;
}

const PokemonContext = createContext<PokemonContextData>({} as PokemonContextData,);

const PokemonProvider: React.FC = ({children}) => {
  const [pokedex, setPokedex] = useState<Array<Pokemon>>([]);
  const [pokedexFiltered, setPokedexFiltered] = useState<Array<Array<Pokemon>>>([]);
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
    setPokedexFiltered(allPokemon);
    setIsLoading(false);
  }

  const filterPokemon = () => {
    const filtered = [] as Array<Pokemon>;
    pokedex.map( elem => {
      if ((elem.name.search(searchInput)) > 0 || (elem.id === parseInt(searchInput))){
        filtered.push(elem);
      }
    });
    const newGroup = [] as Array<Array<Pokemon>>;
    for ( let i=0; i < filtered.length; i += 31){
      newGroup.push(filtered.slice(i, i+31));
    } setPokedexFiltered(newGroup);
    console.log(filtered);
  }

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    const newGroup = [] as Array<Array<Pokemon>>;
    for ( let i=0; i < pokedex.length; i += 31){
      newGroup.push(pokedex.slice(i, i+31));
    } setPokedexFiltered(newGroup);
  }, [pokedex]);

  useEffect(() => {
    filterPokemon();
  }, [searchInput]);
  
  return(
    <PokemonContext.Provider
      value={{
        isLoading,
        searchInput,
        setSearchInput,
        setIsLoading,
        pokedex,
        pokedexFiltered
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };