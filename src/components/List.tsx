import { useEffect, useState } from 'react';
import Spinner from '@atlaskit/spinner'
import usePokemon from '../hooks/usePokemon';
import { Container } from '../style/List';
import Item from './Item';
import { Pokemon } from '../interfaces/Pokemon';
import Column from './Column';

const List = () => {
  const { isLoading, pokedexFiltered } = usePokemon();

  const ListGroup = () => {
    return(
      pokedexFiltered.map( elem => <Column info={elem}/>)
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