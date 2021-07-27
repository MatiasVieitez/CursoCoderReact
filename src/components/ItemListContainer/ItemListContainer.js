import '../ItemListContainer/ItemListContainer.css'
import ItemCounter from '../Counter/ItemCounter'
const ItemListContainer = (props) => {


    const onAdd = (cantidad) => {
        console.log(cantidad)
    }

    return (
        <div className="container">

            <h1 className="titulo"> Bienvenido a {props.brand}</h1>
            <ItemCounter stock={10} initial={1} onAdd={onAdd} />


        </div>
    );
}

export default ItemListContainer