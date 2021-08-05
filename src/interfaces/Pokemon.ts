interface Sprites {
  front_default: string;
}

export interface Pokemon {
  id: number;
  name: string;
  types: string;
  sprites: Sprites;
}