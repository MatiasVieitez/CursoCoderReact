import { useCartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";
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
                <table>

                    <tbody className="t-body">
                        {context.items.map(({ item, quantity }) => {
                            return (
                                <div key={item.id}>
                                    {/* <p>{item.id}</p> */}
                                    <h4> Titulo Producto: {item.title}</h4>
                                    <p> Cantidad Seleccionada: {quantity}</p>
                                    <p> Precio: ${item.price}</p>
                                    <p> Total: ${quantity * item.price}</p>
                                    <button onClick={() => context.removeItem(item.id)}>Eliminar de mi carrito</button>
                                </div>
                            );
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan={4}>Total</th>
                            <th>${context.items.reduce((total, { item: { price }, quantity }) => {
                                return total + price * quantity;
                            }, 0)}</th>
                            <th />
                        </tr>
                    </tfoot>
                </table>
            )
            }
        </>
    );
};

export default Cart;