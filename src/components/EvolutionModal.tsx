import { useEffect, useState } from 'react';
import Spinner from '@atlaskit/spinner'
import usePokemon from '../hooks/usePokemon';
import { Container } from '../style/List';
import Item from './Item';
import { Pokemon } from '../interfaces/Pokemon';
import Line from './Line';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';
import { EvolutionChain } from '../interfaces/Evolution';

const EvolutionModal = () => {
  const { evolution, setIsModalOpen, isModalPokemon } = usePokemon();

  const handleClose = () => setIsModalOpen(false);

  const EvolutionChainImages = () => {
    console.log(evolution.chain)
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
        {EvolutionChainImages()}
      </Modal>
    </ModalTransition>
  )
}

export default EvolutionModal;