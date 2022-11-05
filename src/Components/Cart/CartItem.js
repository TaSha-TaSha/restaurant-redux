import { useDispatch } from 'react-redux';
import dataDishes from '../../data/dataDishes';
import { removeItemFromCart } from '../../redux/cartSlice';

const CartItem = ({cartProp}) => {
    // console.log(cartProp);
    // console.log(cartProp.id);
    const dishesFind = dataDishes.find( item => item.id === cartProp.dishId);
    const dispatch = useDispatch();

    return(<div>
        <p>{cartProp.quantity} portion(s)</p>
        <p>Price: ${dishesFind.price * cartProp.quantity}</p>
        <span onClick={ () => dispatch(removeItemFromCart( {cartPropId: cartProp.id} )) }>
            <img src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt='icon' width='20px' /> 
        </span>
    </div>)
}

export default CartItem;


// этот компонент будет отвечать за каждый товар, который будет попадать в карзину

// https://www.w3schools.com/jsref/jsref_find.asp
// Как связать dishId которые у нас в корзтне с нашим id в dataDishes, нам нужно использовать 
// используем метод array find() 
// этот метод возвращает самый первый элемент, который прошел по нашим условиям


// <span onClick={ () => dispatch(removeItemFromCart( {cartPropId: cartProp.id} )) }>
// здесь cartProp мы берем из Cart.js когда работаем с корзиной

// const dishesFind = dataDishes.find( item => item.id === cartProp.dishId);
// здесь также cartProp мы берем из Cart.js когда работаем с корзиной
