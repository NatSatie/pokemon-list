import { useEffect, useState } from 'react';
import usePokemon from '../hooks/usePokemon';
import { EvolutionDetails, Wrapper } from '../style/EvolutionInformation';
import { SingleSpecie, Species } from '../interfaces/Species';

const EvolutionInformation= () => {
  const [speciesInfo, setSpeciesInfo] = useState<Array<any>>();
  const { isModalPokemon, evolutionInfo, getEvolutionChain, pokedex } = usePokemon();

  useEffect(() => {
    getEvolutionChain()
  }, [isModalPokemon])

  const Container = (value: SingleSpecie | any) => {
    const info = pokedex.find( elem => elem.name === value.value.name)
    return(
      <EvolutionDetails>
        <img
          src={info?.sprites.front_default}
        ></img>
        <p> {info?.name} </p>
      </EvolutionDetails>
    );
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