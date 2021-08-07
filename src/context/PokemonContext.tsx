import { filter } from 'cypress/types/bluebird';
import {
  createContext, Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import PokemonApi from '../api/PokemonApi';
import { Chain, EvolutionChain } from '../interfaces/Evolution';
import { Pokemon } from '../interfaces/Pokemon';
import { SingleSpecie } from '../interfaces/Species';

export interface PokemonContextData {
  evolution: EvolutionChain;
  evolutionInfo: Array<SingleSpecie>;
  isLoading: boolean;
  isModalOpen: boolean;
  isModalPokemon: Pokemon;
  getEvolutionChain: (id?: number) => any;
  searchInput: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setSearchInput: Dispatch<SetStateAction<string>>;
  setIsModalPokemon: Dispatch<SetStateAction<Pokemon>>;
  setEvolutionInfo: Dispatch<SetStateAction<Array<SingleSpecie>>>;
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
  const [evolutionInfo, setEvolutionInfo] = useState<Array<SingleSpecie>>([]);
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

  const getEvolutionChain = async (id ?: number): Promise<EvolutionChain | any> => {
    if (id) {
      const res = await PokemonApi.getSpecies(id);
      const aux = await PokemonApi.getEvolution(res.evolution_chain.url);
      if (aux.chain) {
        evolutionInfo.push(aux.chain.species)
        aux.chain?.evolves_to?.map(
          elem => evolutionRecursive(elem)
        );
      } 
    } 
  }

  const evolutionRecursive = (value : Chain) => {
    evolutionInfo.push(value.species)
    if (value.evolves_to){
      value.evolves_to.map( elem => evolutionRecursive(elem));
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
        evolutionInfo,
        isLoading,
        isModalOpen,
        isModalPokemon,
        getEvolutionChain,
        searchInput,
        setSearchInput,
        setIsLoading,
        setIsModalOpen,
        setIsModalPokemon,
        setEvolutionInfo,
        pokedex,
        pokedexFiltered
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };