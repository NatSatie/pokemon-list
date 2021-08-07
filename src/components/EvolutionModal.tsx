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
import EvolutionInformation from './EvolutionInformation';

const EvolutionModal = () => {
  const [arr, setArr] = useState<Array<SingleSpecie>>([]);
  const { setIsModalOpen, isModalPokemon, evolutionInfo, setEvolutionInfo } = usePokemon();
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return(
    <ModalTransition>
      <Modal
        onClose={handleClose}
        actions={[
          { text: 'Close', onClick: handleClose }
        ]}
      >
        {`#${isModalPokemon.id} ${isModalPokemon.name}`}
        <EvolutionInformation />
      </Modal>
    </ModalTransition>
  )
}

export default EvolutionModal;