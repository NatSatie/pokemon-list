import Button from '@atlaskit/button';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';
import Tooltip from '@atlaskit/tooltip';
import { useState } from 'react';
import usePokemon from '../hooks/usePokemon';
import { Container, IconGithub,Wrapper, Credits } from '../style/Footer';

const Footer = () => { 
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pocket = usePokemon();

  const handleClick = () => {
    if (pocket.isModalOpen) {
      pocket.setIsModalOpen(false);
      setIsOpen(true);
    }
  }

  const handleClose = () => {
    setIsOpen(false);
  };

  return(
    <Container>
      <Wrapper>
        <Tooltip
          content="Página do Github"      
        >
          <Button
            appearance="subtle-link"
            href="https://github.com/NatSatie/"
          >
            <IconGithub/>
          </Button>
        </Tooltip>
      </Wrapper>
      <Credits
        onClick={handleClick}
      > 
        Créditos
      </Credits>
      <ModalTransition>
        <Modal
          onClose={handleClose}
          actions={[
            { text: 'Close', onClick: handleClose }
          ]}
          heading="Créditos"
        >
          <a
            href="https://pokeapi.co/"
          >
            PokemonAPI
          </a>
          <br/>
          <a
            href="https://itsjavi.com/pokemon-assets/"
          >
            Pokemon Assets
          </a>
          <br/>
          <a
            href="https://gist.github.com/apaleslimghost/0d25ec801ca4fc43317bcff298af43c3#file-pokemon-type-colours-js"
          >
            Pokemon Type Colors 
          </a>
        </Modal>
      </ModalTransition>
    </Container>
  )
}
  
export default Footer;