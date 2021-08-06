import { useEffect, useState } from 'react';
import Spinner from '@atlaskit/spinner'
import usePokemon from '../hooks/usePokemon';
import { Container } from '../style/List';
import Item from './Item';
import { Pokemon } from '../interfaces/Pokemon';
import Line from './Line';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';

const EvolutionModal = () => {
  const { setIsModalOpen, isModalPokemon } = usePokemon();

  const handleClose = () => setIsModalOpen(false);

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