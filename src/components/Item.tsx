import usePokemon from '../hooks/usePokemon';
import { Pokemon } from '../interfaces/Pokemon';
import { IdContainer, PokemonAvatar, Container, InfoContainer, NameContainer } from '../style/Item';
import PokemonType from './PokemonType';

interface ItemProps {
  info: Pokemon;
}

const Item: React.FC<ItemProps> = ({info}) => { 
  const { setIsModalOpen, setIsModalPokemon} = usePokemon();

  const handleClick = () => {
    setIsModalOpen(true);
    setIsModalPokemon(info);
  }

  return(
    <Container onClick={handleClick}>
      <PokemonAvatar
        src={info.sprites.front_default}
        size="xlarge"
      />
      <InfoContainer>
        <IdContainer>
          {`#${info.id}`}
        </IdContainer>
        <NameContainer>
          {info.name}
        </NameContainer>
        <PokemonType info={info}/>
      </InfoContainer>
    </Container>
  )
}

export default Item;