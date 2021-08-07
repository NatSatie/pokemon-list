import { useState } from 'react';
import usePokemon from '../hooks/usePokemon';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';
import { SingleSpecie } from '../interfaces/Species';
import EvolutionInformation from './EvolutionInformation';
/* import { Wrapper } from '../style/EvolutionModal'; */

const EvolutionModal = () => {
  const [arr, setArr] = useState<Array<SingleSpecie>>([]);
  const { setIsModalOpen, isModalPokemon, evolutionInfo, setEvolutionInfo } = usePokemon();
  const handleClose = () => {
    setIsModalOpen(false);
    setEvolutionInfo([]);
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