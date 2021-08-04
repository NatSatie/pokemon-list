import { useEffect, useState } from 'react';
import Spinner from '@atlaskit/spinner'
import usePokemon from '../hooks/usePokemon';
import { Container } from '../style/List';

const List = () => {
  const [index, setIndex] = useState<number>(1);
  const { isLoading, pokedex } = usePokemon();

  const PokemonList = () => {
    pokedex.map( elem => {
      return <p>{elem.name}</p>
    });
  }

  return(
    <Container>
      {isLoading && <Spinner /> }
      {pokedex.map( elem => {
        return <p>{elem.name}</p>
      })}
    </Container>
  )
}

export default List;