import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import EcomerceApp from './components/EcomerceApp';
import 'materialize-css/dist/css/materialize.min.css';
import ComponenteConteiner from './components/ItemListContainer';

import Titulo from './components/Titulo';
import Form from './components/Form';
import Boton from './components/Boton';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
   <div className="App">
      <header className="App-header">
      
        <h1>
          Mobilestore
        </h1>
        <NavBar />
      </header>
      <EcomerceApp />
    <Titulo />
    <Form />
    <Boton />
    <ComponenteConteiner />
    <ItemListContainer />
    </div>
  );
}

export default App;


