import Avatar from '@atlaskit/avatar';
import { Pokemon } from '../interfaces/Pokemon';
import { Container } from '../style/Item';

interface ItemProps {
  info: Pokemon;
}

const Item: React.FC<ItemProps> = ({info}) => {  
  return(
    <Container>
      <Avatar
        src={info.sprites.front_default}
        size="large"
      />
      {'#'}
      {info.id}
      {' '}
      {info.name}
    </Container>
  )
}

export default Item;