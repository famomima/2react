import NavBar from "./NavBar";
import ItemCount from './Itemcount';
import Titulo from "./Titulo";
import Item from "./ItemDetail";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import Cart from "./Cart";


function EcomerceApp() {

    const onAdd =(count)=>{
        console.log(`la cantidad es : ${count}`)
    }
return(
<div className="App">
<header className="App-header">
    <div>
<center className="App-header">

        <NavBar />
    </header>
<ItemCount initial={1} stock={5} onAdd={onAdd} />
                <p>hola soy app</p>
                <ItemCount initial={1} stock={6} onAdd={onAdd} />
                <p>hola soy app</p>
                <ItemCount initial={1} stock={4} onAdd={onAdd} />
                <p>hola soy app</p>
                <ItemCount initial={1} stock={5} onAdd={onAdd} />
        <Titulo />
    </center>
    <center>
        <ItemListContainer greeting='hola soy ItemListContainer que vengo de app' />
    </center>
    <BrowserRouter>
    <center>
        <Routes>
                    <Route 
                        exact
                        path="/" 
                        element={ <ItemListContainer greeting='hola soy ItemListContainer que vengo de app' />} 
                    />
                    <Route 
                        exact
                        path="/categoria/:idCate" 
                        element={ <ItemListContainer greeting='hola soy ItemListContainer que vengo de app' />} 
                    />                  
                    <Route 
                        exact
                        path="/detalle/:id" 
                        element={ <ItemDetailContainer />} 
                    />                  
                    <Route 
                        exact
                        path="/cart" 
                        element={ <Cart />} 
                    />   


                </Routes>
    </center>
    </BrowserRouter>
</div>
);
);
}

export default EcomerceApp; 