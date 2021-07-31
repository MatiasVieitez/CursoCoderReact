import '../ItemListContainer/ItemListContainer.css'
import Item from "../Item/Item"

const ItemListContainer = (props) => {

    return (
        <div className="container">

            <h1 className="titulo"> Bienvenido a {props.brand}</h1>

            <Item />

        </div>
    );
}

export default ItemListContainer