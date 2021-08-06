import './App.css';
import EvolutionModal from './components/EvolutionModal';
import List from './components/List';
import SearchBar from './components/SearchBar';
import usePokemon from './hooks/usePokemon';
import { Container } from './style/App';

function App() {
  const { isModalOpen, setIsModalOpen } = usePokemon();
  return (
    <Container>
      <SearchBar />
      <List />
      { isModalOpen && <EvolutionModal />}
    </Container>
  );
}

export default App;
