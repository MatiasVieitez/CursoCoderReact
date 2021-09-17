import './Item.css'
import { NavLink } from "react-router-dom";

const Item = ({ id, title, price, pictureUrl, stock }) => {

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