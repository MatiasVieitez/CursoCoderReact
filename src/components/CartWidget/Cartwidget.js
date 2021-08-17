
import { memo } from 'react';
import { FaShoppingCart } from 'react-icons/fa'
import './Cartwidget.css'
import { useCartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';

const CartWidget = () => {


    const { items } = useCartContext();

    return (
        <>
            {items.length === 0 ? null : (
                <div className="right">
                    <div className="btn">
                        <FaShoppingCart className="carrito" />
                        <NavLink to="/cart">({items.reduce((total, { quantity }) => {
                            return total + quantity
                        }, 0)})</NavLink>
                    </div>
                </div>
            )}
        </>
    );
}








export default CartWidget;