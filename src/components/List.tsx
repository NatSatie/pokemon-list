import Spinner from '@atlaskit/spinner'
import usePokemon from '../hooks/usePokemon';
import { Container,SpinnerContainer } from '../style/List';
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
    } return <>{pokedexFiltered.map( (elem, index) => <Line key={index} info={elem}/>)}</>
  }

  return(
    <Container>
      {PokemonList()}
    </Container>
  )
}

export default List;