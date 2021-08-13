import { useState } from "react";
import ItemCounter from "../Counter/ItemCounter.js";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./itemdetail.css"


const ItemDetail = ({ item: { title, price, pictureUrl, descripcion } }) => {

    const [count, setCounter] = useState();

    const additem = eventCount => {

        setCounter(eventCount)

    }

    return (
        <>


            <section className="productos">

                <div className="contenedor">

                    <h3>{title}</h3>
                    <h4>${price}</h4>
                    <p>{descripcion} </p>


                    <img src={pictureUrl} alt="" className="logos" />

                    {count >= 1 ? (
                        <>
                            <p>Cantidad: {count}</p>
                            <NavLink to="/cart" ><Button variant="outline-success">terminar compra</Button></NavLink>
                        </>
                    ) : (

                        <ItemCounter stock={10} initial={1} onAdd={additem} className="contador" />
                    )}
                </div>




            </section>

        </>
    )
}

export default ItemDetail