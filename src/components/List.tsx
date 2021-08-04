import { useEffect, useState } from 'react';
import Spinner from '@atlaskit/spinner'
import usePokemon from '../hooks/usePokemon';
import { Container } from '../style/List';
import Item from './Item';
import { Pokemon } from '../interfaces/Pokemon';
import Column from './Column';

const List = () => {
  const [index, setIndex] = useState<number>(1);
  const [size, setSize] = useState<number>(31);
  const [pokemonGroup, setPokemonGroup] = useState<Array<Array<Pokemon>>>([]);
  const { isLoading, pokedex } = usePokemon();

  const ListGroup = () => {
    const newGroup = [];
    for ( let i=0; i < pokedex.length; i += size){
      newGroup.push(pokedex.slice(i, i+31));
    } 
    return(
      newGroup.map( elem => <Column info={elem}/>)
    );
  }

  return(
    <Container>
      {isLoading && <Spinner /> }
      {ListGroup()}
    </Container>
  )
}

export default List;