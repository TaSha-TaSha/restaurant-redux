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

// соединяем этот компонент с компонентом cartSlice через ХУК useSelector
// const cartItems отвечает за то, что у нас попадает в корзину
// через метод .map передадим каждый товар в комонент <CartItem />

// {cartItems.map( (element, index) => (<CartItem cartProp={element} key={index}/>) )}
// здесь cartProp который нам нужен для работы с корзиной, очень важный проп!!!!!!

