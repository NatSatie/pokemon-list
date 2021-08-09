import { useState, FormEvent, KeyboardEvent } from 'react';
import { SearchButton, Container, Input } from '../style/SearchBar';
import usePokemon from '../hooks/usePokemon';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const pocket = usePokemon();

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setSearchInput(event.currentTarget.value);
  }

  const handleSearch = () => {
    pocket.filterPokemon(searchInput);
  }

  const handleSearchByEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter"){
      handleSearch();
    }
  }

  return(
    <Container>
      <Input
        name="basic"
        aria-label="default text field"
        placeholder="Digite o nome ou número do pokémon"
        onKeyPress={handleSearchByEnter}
        onChange={handleChange}
        pattern="[^()/><\][\\\x22,;|]+"
      />
      <SearchButton
        onClick={handleSearch}
      >
        Procurar
      </SearchButton>
    </Container>
  )
}

export default SearchBar;