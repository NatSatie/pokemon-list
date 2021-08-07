import { SingleSpecie } from "./Species";

interface EvolutionDetails {
  item: any;
  trigger: any;
  gender: any;
  min_level: number;
}

export interface Chain {
  is_baby: boolean;
  species: SingleSpecie;
  evolution_details: Array<EvolutionDetails>;
  evolves_to: Array<Chain>;
}

export interface EvolutionChain {
  chain: Chain;
}