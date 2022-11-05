import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getSelectedItems, getTotalPrice } from '../../redux/cartSlice';

const Cart = () => {
    const cartItems = useSelector(getSelectedItems);
    const totalPrice = useSelector(getTotalPrice);

    return(<div>
        <img className="cartIcon" src='https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png' alt='cartIcon' />
        {cartItems.map( (element, index) => (<CartItem cartProp={element} key={index}/>) )}
        <h3>TOTAL: ${totalPrice}</h3>
    </div>)
};

export default Cart;

