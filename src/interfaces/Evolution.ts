export interface Species {
  name: string;
  url: string;
}

interface EvolutionDetails {
  item: any;
  trigger: any;
  gender: any;
  min_level: number;
}

interface Chain {
  is_baby: boolean;
  species: Species[];
  evolution_details: EvolutionDetails[];
  evolves_to: Chain[];
}

export interface EvolutionChain {
  chain: Chain;
}