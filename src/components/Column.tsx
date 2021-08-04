import { Pokemon } from '../interfaces/Pokemon';
import { Container } from '../style/Column';
import Item from './Item';

interface ColumnProps {
  info: Array<Pokemon>;
}

const Column: React.FC<ColumnProps> = ({info}) => {  
  return(
    <Container>
      {info.map( elem => <Item info={elem}/>)}
    </Container>
  )
}

export default Column;