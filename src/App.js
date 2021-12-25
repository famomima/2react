import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import EcomerceApp from './components/EcomerceApp';
import 'materialize-css/dist/css/materialize.min.css';
import ComponenteConteiner from './components/ItemListContainer';

import Titulo from './components/Titulo';
import Form from './components/Form';
import Boton from './components/Boton';



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
    </div>
  );
}
  </div>
  );
}
export default App;


