import { Pokemon } from "../interfaces/Pokemon";

const PokemonApi = {
  getPokemonByNameId: async (input: string) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    const posts = await res.json();
    return posts;
  },
  getEvolution: async (id?: number) => {
    if (id){
      const res = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`);
      const posts = await res.json();
      return posts;
    }
  }
};

export default PokemonApi;