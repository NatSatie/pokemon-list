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
import { resolve } from 'cypress/types/bluebird';

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
    await setSpeciesInfo(arr);
  }

/*   const getEachEvolution = async (value: string) => {
    const res = await PokemonApi.getSpeciesByURL(value);
    console.log(res)
  } */

  useEffect(() => {
    getEvolutionChain();
    //speciesInfo?.map( elem => getEachEvolution(elem.url));
    console.log(speciesInfo)
  }, [setSpeciesInfo]);

  const getInfo = async (value: string) => {
    try {
      const res = await PokemonApi.getSpeciesByURL(value);
      return res
    } catch (error){
      console.error(error)
    }
  }

  const Container = (value: SingleSpecie | any) => {
    const pokemon = value.value;
    const info = [] as Array<any>;
    Promise.resolve(getInfo(pokemon.url).then(values => info.push(values)));
    console.log(info)
    if (pokemon.name){
      return <p> {pokemon.name}</p>
    } return <></>
  }

  return(
    <>
      {speciesInfo?.map( elem => {
        if (elem) {
          return <Container value={elem}/>
        } return <></>
      })}
    </>
  )
}

export default EvolutionInformation;