import Tooltip from '@atlaskit/tooltip';
import usePokemon from '../hooks/usePokemon';
import { Pokemon } from '../interfaces/Pokemon';
import { Img, ImgWrapper, ImgContainer,InfoContainer } from '../style/PokemonType';

interface PokemonTypeProps {
  info: Pokemon;
}

const PokemonType: React.FC<PokemonTypeProps> = ({info}) => { 
  const getColor = (type: string): string | any => {
    const colours: any = {
      normal: '#A8A77A',
      fire: '#EE8130',
      water: '#6390F0',
      electric: '#F7D02C',
      grass: '#7AC74C',
      ice: '#96D9D6',
      fighting: '#C22E28',
      poison: '#A33EA1',
      ground: '#E2BF65',
      flying: '#A98FF3',
      psychic: '#F95587',
      bug: '#A6B91A',
      rock: '#B6A136',
      ghost: '#735797',
      dragon: '#6F35FC',
      dark: '#705746',
      steel: '#B7B7CE',
      fairy: '#D685AD',
    }
    return type ? colours[type] : '#ABABAB';
  }

  const getName = (name: string): string => {
    const names: any = {
      normal: 'Normal',
      fire: 'Fogo',
      water: 'Água',
      electric: 'Elétrico',
      grass: 'Grama',
      ice: 'Gelo',
      fighting: 'Lutador',
      poison: 'Veneno',
      ground: 'Terra',
      flying: 'Voador',
      psychic: 'Psíquico',
      bug: 'Inseto',
      rock: 'Pedra',
      ghost: 'Fantasma',
      dragon: 'Dragão',
      dark: 'Sombrio',
      steel: 'Metal',
      fairy: 'Fada',
    }
    return `Tipo ${names[name]}`
  }
  
  const GetType = (name: string) => {
    const nametype = `https://duiker101.github.io/pokemon-type-svg-icons/icons/${name}.svg`
    return(
      <Tooltip
        content={getName(name)}
      > 
      <ImgWrapper>
        <ImgContainer color={getColor(name)}>
          <Img
            src={nametype}
            width="15"
          ></Img>
        </ImgContainer>
      </ImgWrapper>
      </Tooltip>
    );
  }

  return(
    <InfoContainer>
      {info.types.map((elem) => GetType(elem.type.name))}
    </InfoContainer>
  )
}

export default PokemonType;