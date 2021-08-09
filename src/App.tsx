import './App.css';
import EvolutionModal from './components/EvolutionModal';
import Footer from './components/Footer';
import List from './components/List';
import SearchBar from './components/SearchBar';
import usePokemon from './hooks/usePokemon';
import { Container } from './style/App';

function App() {
  const { isModalOpen } = usePokemon();
  return (
    <Container>
      <SearchBar />
      <List />
      { isModalOpen && <EvolutionModal />}
      <Footer />
    </Container>
  );
}

export default App;
