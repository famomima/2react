const estados= ['js', 'React js', 'Component']
const estados= ['item 1', 'item 2', 'item 3']
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Items from "./Items"
import ItemList from './ItemList'


const Item = ({valor}) => {
    return (
        <button>{valor}</button>
    )
}
function ComponenteConteiner() {
    const items = estados.map(t => <Item valor={t}/>)
    function ItemListContainer( {greeting} ) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { idCate } = useParams() 


    useEffect(() => {
        if (idCate) {
            Items
            .then(resp => setProductos(resp.filter(prod => prod.categoria === idCate))) 
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))            
        } else {
            Items
            .then(resp => setProductos(resp)) 
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))               
        }
    }, [idCate])  

    console.log(idCate)
    // [] => retorna otro array [<li>1</li>,....]
    
    return (
        <div>
            {items}
            { greeting }
            { loading ? 
                <h2>Cargando...</h2> 
                :  
            <ItemList productos={productos} />
            }

        </div>
    )
}
export default ComponenteConteiner
export default ItemListContainer