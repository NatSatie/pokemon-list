import { SingleSpecie } from "./Species";

interface Sprites {
  front_default: string;
}

interface Type {
  name: string;
  url: string;
}

interface TypeInfo {
  slot: number;
  type: Type;
}


export interface Pokemon {
  id: number;
  height: number;
  weight: number;
  name: string;
  types: Array<TypeInfo>;
  sprites: Sprites;
  species: SingleSpecie;
}