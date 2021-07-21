import '../ItemListContainer/ItemListContainer.css'


const ItemListContainer = (props) => {


    return (
        <div className="container">

            <h1 className="titulo"> Bienvenido a {props.brand}</h1>


        </div>
    );
}

export default ItemListContainer