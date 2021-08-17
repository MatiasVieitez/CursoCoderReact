import { useCartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";
const Cart = () => {
    const context = useCartContext();
    return (
        <>
            <h3>Bienvenido al carrito</h3>
            <button onClick={() => context.clear()}>Vaciar tu carrito</button>
            {context.items.lenght === 0 ? (
                <>
                    <p>el carrito esta vacio</p>
                    <NavLink to="/">Regresar a productos</NavLink>
                </>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <p>ID</p>
                            <p>Producto:</p>
                            <p>Cantidad:</p>
                            <p>Precio unitario:</p>
                            <p>Precio total:</p>

                        </tr>
                    </thead>
                    <tbody>
                        {context.items.map(({ item, quantity }) => {
                            return (
                                <div key={item.id}>
                                    <p>{item.id}</p>
                                    <h4>{item.title}</h4>
                                    <p>{quantity}</p>
                                    <p>${item.price}</p>
                                    <p>${quantity * item.price}</p>
                                    <button onClick={() => context.removeItem(item.id)}>X</button>
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