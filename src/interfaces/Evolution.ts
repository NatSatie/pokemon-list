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
  species: {
    name: string;
    url: string;
  };
  evolution_details: EvolutionDetails[];
  evolves_to: Chain[];
}

export interface EvolutionChain {
  chain: {
    is_baby: boolean;
    species: {
      name: string;
      url: string;
    };
    evolution_details: EvolutionDetails[];
    evolves_to: Chain[];
  }
}