import './App.css';
import List from './components/List';
import SearchBar from './components/SearchBar';
import { Container } from './style/App';

function App() {
  return (
    <Container>
      <SearchBar />
      <List />
    </Container>
  );
}

export default App;
