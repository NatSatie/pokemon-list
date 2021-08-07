import { useEffect, useState } from 'react';
import Spinner from '@atlaskit/spinner'
import usePokemon from '../hooks/usePokemon';
import { Container } from '../style/List';
import Item from './Item';
import { Pokemon } from '../interfaces/Pokemon';
import Line from './Line';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';
import { Chain, EvolutionChain } from '../interfaces/Evolution';
import { SingleSpecie, Species } from '../interfaces/Species';
import PokemonApi from '../api/PokemonApi';
import { values } from 'cypress/types/lodash';

const EvolutionInformation= () => {
  const [speciesInfo, setSpeciesInfo] = useState<Array<SingleSpecie>>();
  const [evolutionList, setEvolutionList] = useState<Array<Species>>();
  const { isModalPokemon } = usePokemon();

  const getEvolutionChain = async () => {
    const arr = [] as Array<SingleSpecie>
    const res = await PokemonApi.getSpecies(isModalPokemon.id);
    const evol = await PokemonApi.getEvolution(res.evolution_chain.url);
    arr.push(evol.chain.species)
    if (evol.chain?.evolves_to){
      evol.chain?.evolves_to.map(elem => {
        const recursiveCall = (value: Chain) => {
          arr.push(value.species)
          value?.evolves_to.map(
            aux => recursiveCall(aux)
          )
        }
        recursiveCall(elem);
      })
    }
    console.log(arr)
    setSpeciesInfo(arr)
  }

  useEffect(() => {
    getEvolutionChain();
    /* console.log(speciesInfo) */
  }, [isModalPokemon]);

  return(
    <>
      {speciesInfo?.map( elem => <p>{elem.name}</p>)}
    </>
  )
}

export default EvolutionInformation;