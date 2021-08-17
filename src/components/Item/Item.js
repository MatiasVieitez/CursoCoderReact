import ItemCounter from "../Counter/ItemCounter.js";
import './Item.css'
import { NavLink } from "react-router-dom";

//id: 1, title: 'Monito', price: 670, pictureUrl: Mono, stock: 20

const Item = ({ id, title, price, pictureUrl, stock }) => {

    function onAdd(counter) {



    }


    return (

        <>
            <section className="productos">

                <div className="contenedor">
                    <h3 className="Producto-title"><NavLink to={`/item/${id}`}>{title}</NavLink></h3>
                    <h4>${price}</h4>

                    <img src={pictureUrl} alt="" className="logos" />
                </div>


            </section>

        </>

    );



};

export default Item;