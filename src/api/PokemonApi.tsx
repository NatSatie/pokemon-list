import { EvolutionChain } from "../interfaces/Evolution";
import { Pokemon } from "../interfaces/Pokemon";
import { Species } from "../interfaces/Species";

const PokemonApi = {
  getPokemonByNameId: async (input: string) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    const posts = await res.json();
    return posts;
  },
  getSpecies: async (id: number): Promise<Species> => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const posts = await res.json();
    return posts;
  },
  getEvolution: async (url: string): Promise<EvolutionChain> => {
    const res = await fetch(url);
    const posts = await res.json();
    return posts;
  }
};

export default PokemonApi;