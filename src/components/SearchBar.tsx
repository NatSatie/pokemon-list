import Textfield from '@atlaskit/textfield';
import { Container } from '../style/SearchBar';

const SearchBar = () => {
  return(
    <Container>
      <Textfield
        name="basic"
        aria-label="default text field"
        placeholder="Search pokémon"
      />
    </Container>
  )
}

export default SearchBar;