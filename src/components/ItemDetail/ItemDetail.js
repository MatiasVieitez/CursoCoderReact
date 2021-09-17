import { useState } from "react";
import ItemCounter from "../Counter/ItemCounter.js";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./itemdetail.css"
import { useCartContext } from "../../context/CartContext.js";



const ItemDetail = ({ item }) => {

    const [count, setCounter] = useState();

    const { title, price, pictureUrl, description, stock } = item;

    const context = useCartContext();

    const addItem = eventCount => {

        setCounter(eventCount)

    }

    return (
        <>

            <section className="productos">

                <div className="contenedor-detail">

                    <h3>{title}</h3>
                    <h4>${price}</h4>
                    <p>{description} </p>


                    <img src={pictureUrl} alt="" className="logos" />

                    {count >= 1 ? (
                        <>
                            <p>Cantidad: {count}</p>
                            <NavLink to="/cart" ><Button variant="outline-success" onClick={() => context.addItem(item, count)}>Finalizar la compra</Button></NavLink>
                        </>
                    ) : (
                        <>
                            {context.isInCart(item.id) ? (

                                <p className="txt-productoigual">Este producto ya se encuentra en el carrito</p>

                            ) : (
                                < ItemCounter stock={stock} initial={1} onAdd={addItem} className="contador" />
                            )}



                        </>

                    )}
                </div>

            </section>

        </>
    )
}

export default ItemDetail