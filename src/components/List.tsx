import Spinner from '@atlaskit/spinner'
import usePokemon from '../hooks/usePokemon';
import { Container, ListContainer, SpinnerContainer } from '../style/List';
import Line from './Line';

const List = () => {
  const { isLoading, pokedexFiltered } = usePokemon();

  const PokemonList = () => {
    if (isLoading){
      return(
        <SpinnerContainer>
          <Spinner appearance="invert" size="xlarge"/>
        </SpinnerContainer>
      )
    }
    if (pokedexFiltered.length > 0){
      return (
        <ListContainer
          data-cy="pokemon-list"
        >
          {pokedexFiltered.map( (elem, index) => <Line key={index} info={elem}/>)}
        </ListContainer>
      )
    } else {
      return <> Nenhum resultado encontrado </>
    }
  }

  return(
    <Container>
      {PokemonList()}
    </Container>
  )
}

export default List;