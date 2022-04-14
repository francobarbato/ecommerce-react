import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar />
      <h2>Cascos</h2>
      <hr></hr>
        {/* <ItemListContainer/> */}
        <ItemDetailContainer/>
    </>
  );
}

export default App;
