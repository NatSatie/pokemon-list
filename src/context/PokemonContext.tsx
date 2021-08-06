import {
  createContext, Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import PokemonApi from '../api/PokemonApi';
import { Pokemon } from '../interfaces/Pokemon';

export interface PokemonContextData {
  isLoading: boolean;
  isModalOpen: boolean;
  isModalPokemon: Pokemon;
  getEvolutionChain: (id: number) => any;
  searchInput: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setSearchInput: Dispatch<SetStateAction<string>>;
  setIsModalPokemon: Dispatch<SetStateAction<Pokemon>>;
  pokedex: Array<Pokemon>;
  pokedexFiltered: Array<Array<Pokemon>>;
}

const PokemonContext = createContext<PokemonContextData>({} as PokemonContextData,);

const PokemonProvider: React.FC = ({children}) => {
  const [pokedex, setPokedex] = useState<Array<Pokemon>>([]);
  const [pokedexFiltered, setPokedexFiltered] = useState<Array<Array<Pokemon>>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalPokemon, setIsModalPokemon] = useState<Pokemon>({} as Pokemon);
  const [searchInput, setSearchInput] = useState<string>('');
  const [size, setSize] = useState<number>(5);

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

  const getEvolutionChain = async () => {
    const res = await PokemonApi.getEvolution(isModalPokemon?.id);
    return res;
  }

  const filterPokemon = () => {
    const filtered = [] as Array<Pokemon>;
    pokedex.map( elem => {
      if ((elem.name.search(searchInput)) >= 0 || (elem.id.toString().search(searchInput) >= 0)){
        filtered.push(elem);
      }
    });
    const newGroup = [] as Array<Array<Pokemon>>;
    for ( let i=0; i < filtered.length; i += size){
      newGroup.push(filtered.slice(i, i+size));
    } setPokedexFiltered(newGroup);
  }

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    const newGroup = [] as Array<Array<Pokemon>>;
    for ( let i=0; i < pokedex.length; i +=size){
      newGroup.push(pokedex.slice(i, i+size));
    } setPokedexFiltered(newGroup);
  }, [pokedex]);

  useEffect(() => {
    filterPokemon();
  }, [searchInput]);
  
  return(
    <PokemonContext.Provider
      value={{
        isLoading,
        isModalOpen,
        isModalPokemon,
        getEvolutionChain,
        searchInput,
        setSearchInput,
        setIsLoading,
        setIsModalOpen,
        setIsModalPokemon,
        pokedex,
        pokedexFiltered
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };