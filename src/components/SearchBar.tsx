import Textfield from '@atlaskit/textfield';
import { Container } from '../style/SearchBar';
import usePokemon from '../hooks/usePokemon';
import { FormEvent } from 'react';

const SearchBar = () => {
  const pocket = usePokemon();

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    pocket.setSearchInput(event.currentTarget.value);
    
  }

  return(
    <Container>
      <Textfield
        name="basic"
        aria-label="default text field"
        placeholder="Search pokémon"
        onChange={handleChange}
      />
    </Container>
  )
}

export default SearchBar;