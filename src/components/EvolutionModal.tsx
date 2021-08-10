import usePokemon from '../hooks/usePokemon';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';
import EvolutionInformation from './EvolutionInformation';
import { IdContainer, InfoContainer, ModalContainer } from '../style/EvolutionModal';
import PokemonType from './PokemonType';

const EvolutionModal = () => {
  const { setIsModalOpen, isModalPokemon, setEvolutionInfo } = usePokemon();
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
        width="xlarge"
      >
        <ModalContainer>
          <IdContainer>
            {`#${isModalPokemon.id} ${isModalPokemon.name}`}
          </IdContainer>
          <PokemonType info={isModalPokemon}/>
          <h4> Informações </h4>
          <InfoContainer>
            {`Altura: ${isModalPokemon.height/10}m`}
          </InfoContainer>
          <InfoContainer>
            {`Peso: ${isModalPokemon.height/10}kg`}
          </InfoContainer>
          <h4> Cadeia de evolução </h4>
          <EvolutionInformation />
        </ModalContainer>
      </Modal>
    </ModalTransition>
  )
}

export default EvolutionModal;