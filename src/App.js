import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <h2>Cascos</h2>
      <div className='tarjeta'>
        <ItemListContainer marca="shred" color="negro" cantidad="unidades disponbles:" stock="5"/>
      </div>
    </>
  );
}

export default App;
