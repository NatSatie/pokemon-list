import { useEffect, useState } from 'react';
import Spinner from '@atlaskit/spinner'
import usePokemon from '../hooks/usePokemon';
import { Container } from '../style/List';
import Item from './Item';
import { Pokemon } from '../interfaces/Pokemon';
import Line from './Line';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';
import { Chain, EvolutionChain } from '../interfaces/Evolution';
import { SingleSpecie } from '../interfaces/Species';
import PokemonApi from '../api/PokemonApi';

const EvolutionModal = () => {
  const { evolution, setIsModalOpen, isModalPokemon, setEvolutionInfo, evolutionInfo } = usePokemon();
  const [pokemonList, setPokemonList] = useState<Array<SingleSpecie>>([]as Array<SingleSpecie>);

  const handleClose = () => {
    setIsModalOpen(false);
    setEvolutionInfo([]);
  };

  const evolutionData = async (url: string) => {
    console.log(url)
    try {
      const res = await PokemonApi.getSpeciesByURL(url);
      console.log(res)
    } catch (error) {
      console.error(error);
    }
  }

  const evolutions = () => {
    evolutionInfo.map(
      evo => {
        evolutionData(evo.url);
        console.log(evo.url)
      }
    );
  }

  return(
    <ModalTransition>
      <Modal
        onClose={handleClose}
        actions={[
          { text: 'Close', onClick: handleClose }
        ]}
      >
        {`#${isModalPokemon.id} ${isModalPokemon.name}`}
      </Modal>
    </ModalTransition>
  )
}

export default EvolutionModal;