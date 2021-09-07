import { useCartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";
import OrderContainer from "../order/OrderContainer";
import './cart.css'

const Cart = () => {
    const context = useCartContext();


    return (
        <>
            <h3>Bienvenido al carrito</h3>
            <button onClick={() => context.clear()}>Vaciar tu carrito</button>
            {context.items.length === 0 ? (
                <>
                    <p>el carrito esta vacio</p>
                    <NavLink to="/">Regresar a productos</NavLink>
                </>
            ) : (
                <div className="items-carrito">



                    {context.items.map(({ item, quantity }) => {
                        return (
                            <div key={item.id} className="producto-carrito">

                                <h5> Titulo Producto: {item.title}</h5>
                                <img src={item.pictureUrl} className="img-carrito" />
                                <p> Cantidad Seleccionada: {quantity}</p>
                                <p> Precio: ${item.price}</p>
                                <p className=""> Total: ${quantity * item.price}</p>

                                <button onClick={() => context.removeItem(item.id)} className="btn-eliminar-elemento">Eliminar de mi carrito</button>
                            </div>
                        );
                    })}





                    <h4 colSpan={4} className="total">Total carrito:
                        ${context.items.reduce((total, { item: { price }, quantity }) => {
                            return total + price * quantity;
                        }, 0)}</h4>




                </div>





            )

            }
            <div>
                <OrderContainer cart={context.items} />
            </div>
        </>
    );
};

export default Cart;