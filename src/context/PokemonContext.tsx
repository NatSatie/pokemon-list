import { filter } from 'cypress/types/bluebird';
import {
  createContext, Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import PokemonApi from '../api/PokemonApi';
import { EvolutionChain } from '../interfaces/Evolution';
import { Pokemon } from '../interfaces/Pokemon';

export interface PokemonContextData {
  evolution: EvolutionChain;
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
  const [evolution, setEvolution] = useState<EvolutionChain>({} as EvolutionChain);
  const [searchResult, setSearchResult] = useState<Array<Pokemon>>([]);
  const [searchInput, setSearchInput] = useState<string>('');
  const [size, setSize] = useState<number>(Math.floor(window.innerWidth/256)-1);

  const getPokemon = async () => {
    const allPokemon = [];
    setIsLoading(true);
    for (let i = 1; i <= 151; i++) {
      const out = await PokemonApi.getPokemonByNameId(i.toString());
      allPokemon.push(out);
    }
    setPokedex(allPokemon);
    setPokedexFiltered(allPokemon);
    setSearchResult(allPokemon);
    setIsLoading(false);
  }

  const getEvolutionChain = async (): Promise<EvolutionChain | any> => {
    if (isModalPokemon){
      const res = await PokemonApi.getEvolution(isModalPokemon.id);
      setEvolution(res);
    } else {
      return {};
    }
  }

  const breakToList = (filtered: Array<Pokemon>) => {
    const newGroup = [] as Array<Array<Pokemon>>;
    for ( let i=0; i < filtered.length; i += size){
      newGroup.push(filtered.slice(i, i+size));
    } setPokedexFiltered(newGroup);
  }

  const filterPokemon = () => {
    const filtered = [] as Array<Pokemon>;
    pokedex.map( elem => {
      if ((elem.name.search(searchInput)) >= 0 || (elem.id.toString().search(searchInput) >= 0)){
        filtered.push(elem);
      }
    });
    setSearchResult(filtered);
    breakToList(filtered);
  }

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    breakToList(searchResult);
  }, [size]);

  useEffect(() => {
    const newGroup = [] as Array<Array<Pokemon>>;
    for ( let i=0; i < pokedex.length; i +=size){
      newGroup.push(pokedex.slice(i, i+size));
    } setPokedexFiltered(newGroup);
  }, [pokedex]);

  useEffect(() => {
    filterPokemon();
  }, [searchInput]);

  useEffect(() => {
    getEvolutionChain();
  }, [isModalPokemon]);

  useEffect(() => {
    const getSize = () => {
      setSize(Math.floor(window.innerWidth/256)-1);
    }
    window.addEventListener("resize", getSize);
    return () => window.removeEventListener("resize", getSize);
  }, [window.innerWidth]);
  
  return(
    <PokemonContext.Provider
      value={{
        evolution,
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