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
  name: string;
  types: Array<TypeInfo>;
  sprites: Sprites;
}