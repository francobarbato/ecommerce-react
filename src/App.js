import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <h2>Cascos</h2>
      <hr></hr>
        <ItemListContainer/>
    </>
  );
}

export default App;
