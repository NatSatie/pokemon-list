import { Pokemon } from '../interfaces/Pokemon';
import { Container } from '../style/Item';

interface ItemProps {
  info: Pokemon;
}

const Item: React.FC<ItemProps> = ({info}) => {  
  return(
    <Container>
      {info.name}
    </Container>
  )
}

export default Item;