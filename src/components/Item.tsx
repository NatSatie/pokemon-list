import Avatar from '@atlaskit/avatar';
import { Pokemon } from '../interfaces/Pokemon';
import { Container, InfoContainer, TypeContainer, TypeIcon } from '../style/Item';

interface ItemProps {
  info: Pokemon;
}

const Item: React.FC<ItemProps> = ({info}) => { 

  /* const PokemonImg = async () => {
    const img = new Image();
    img.src = info.sprites.front_default
    await img.decode();
    return img
  } */

  const Name = () => {
    return(
      <div>
        {'#'}
        {info.id}
        {' '}
        {info.name}
      </div>
    );
  }

  const Type = (name: string) => {
    const nametype = `https://duiker101.github.io/pokemon-type-svg-icons/icons/${name}.svg`
    return(
      <>
        <img
          src={nametype}
          width="25"
        ></img>
      </>
    );
  }

  return(
    <Container>
      <Avatar
        src={info.sprites.front_default}
        size="xlarge"
      />
      <InfoContainer>
        {Name()}
        <TypeContainer>
          {info.types.map(elem => Type(elem.type.name))}
        </TypeContainer>
        <span className="pksymbol-wrapper"><i className="pksymbol pksymbol-type-fairy"></i></span>
      </InfoContainer>
    </Container>
  )
}

export default Item;