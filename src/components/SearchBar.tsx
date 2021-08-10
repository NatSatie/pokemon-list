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
    const format = new RegExp("[^^!@#$%¨&/*?]")
    if( searchInput.match(format) ){
      pocket.filterPokemon(searchInput);
    } else {
      pocket.filterPokemon("");
    }
  }

  const handleSearchByEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter"){
      handleSearch();
    }
  }

  return(
    <Container>
      <Input
        type="text"
        name="basic"
        aria-label="default text field"
        placeholder="Digite o nome ou número do pokémon"
        onKeyPress={handleSearchByEnter}
        onChange={handleChange}
        data-cy="pokemon-search"
      />
      <SearchButton
        onClick={handleSearch}
        data-cy="pokemon-search-button"
      >
        Procurar
      </SearchButton>
    </Container>
  )
}

export default SearchBar;