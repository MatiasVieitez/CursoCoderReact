import { FaShoppingCart } from 'react-icons/fa'
import './Cartwidget.css'
import { useCartContext } from '../../context/CartContext';
import CartContextProvider from '../../context/CartContext';
import { CartContext } from '../../context/CartContext'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

const CartWidget = () => {


    const { items } = useContext(CartContext)

    return (
        <>
            {
                items.length === 0 ? null : (
                    <div className="right">
                        <div className="btn">
                            <FaShoppingCart className="carrito" />
                            <NavLink to="/cart" className="pop-carrito">({items.reduce((total, { quantity }) => {
                                return total + quantity
                            }, 0)})</NavLink>
                        </div>
                    </div>
                )
            }
        </>
    );
}








export default CartWidget;