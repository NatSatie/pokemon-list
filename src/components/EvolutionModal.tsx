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
  const { evolution, getEvolutionChain, setIsModalOpen, isModalPokemon } = usePokemon();

  const handleClose = () => setIsModalOpen(false);

  const BabyVersion = () => {
    if (evolution.chain?.is_baby) {
      return(
        <>
          BabyVersion
        </>
      );
    }
  };

  const ActualVersion = () => {
    if (isModalPokemon) {
      return(
        <>
          is ActualVersion form
        </>
      );
    }
  };

  const NextVersions = () => {
    if (evolution.chain?.evolves_to) {
      evolution.chain.evolves_to.map(
        elem => console.log("elem.species: ", elem.species)
      );
    }
  }

  useEffect(()=>{
    console.log("changes modal pokemon: ", evolution)
  }, [isModalPokemon]);

  return(
    <ModalTransition>
      <Modal
        onClose={handleClose}
        actions={[
          { text: 'Close', onClick: handleClose }
        ]}
      >
        {`#${isModalPokemon.id} ${isModalPokemon.name}`}
        {BabyVersion()}
        {ActualVersion()}
        {NextVersions()}
      </Modal>
    </ModalTransition>
  )
}

export default EvolutionModal;