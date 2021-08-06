import { useEffect, useState } from 'react';
import Spinner from '@atlaskit/spinner'
import usePokemon from '../hooks/usePokemon';
import { Container } from '../style/List';
import Item from './Item';
import { Pokemon } from '../interfaces/Pokemon';
import Line from './Line';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';

const EvolutionModal = () => {
  const { getEvolutionChain, setIsModalOpen, isModalPokemon } = usePokemon();
  const [evolutionInfo, setEvolutionInfo] = useState<any>();

  const handleClose = () => setIsModalOpen(false);

  const BabyVersion = () => {
    if (evolutionInfo.chain.is_baby) {
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

  /* const NextVersions = () => {
    if (evolutionInfo.chain.evolves_to) {
      return(
        <>
          {evolutionInfo.chain.evolves_to.map( elem => {
            console.log(elem);
            return(
              <p> evolution is valid </p>
            )
          })}
        </>
      );
    }
  } */

  useEffect(() => {
    setEvolutionInfo(getEvolutionChain(isModalPokemon.id));
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
        {/* {BabyVersion()}
        {ActualVersion()} */}
      </Modal>
    </ModalTransition>
  )
}

export default EvolutionModal;