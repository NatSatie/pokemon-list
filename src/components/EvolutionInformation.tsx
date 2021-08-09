import Spinner from '@atlaskit/spinner'
import { useEffect, useState } from 'react';
import usePokemon from '../hooks/usePokemon';
import { EvolutionDetails, Image, NameContainer, Wrapper } from '../style/EvolutionInformation';
import { SingleSpecie } from '../interfaces/Species';

const EvolutionInformation= () => {
  const { isModalPokemon, evolutionInfo, getEvolutionChain, pokedex } = usePokemon();

  useEffect(() => {
    getEvolutionChain()
  }, [isModalPokemon])

  const Container = (value: SingleSpecie | any) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const info = pokedex.find( elem => elem.name === value.value.name)
    
    const handleLoader = () => {
      setIsLoaded(true);
    }
    
    if (info && info.id <= 151){
      return(
        <EvolutionDetails>
          <Image
            src={info?.sprites.front_default}
            onLoad={handleLoader}
          />
          {!isLoaded && <Spinner />}
          <NameContainer>
            {`#${info?.id} ${info?.name}`}
          </NameContainer>
        </EvolutionDetails>
      );
    } return <></>
  }

  return(
    <Wrapper>
      {evolutionInfo.map( elem => {
        if (elem) {
          return <Container value={elem}/>
        } return <></>
      })}
    </Wrapper>
  )
}

export default EvolutionInformation;