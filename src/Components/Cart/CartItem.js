import { useDispatch } from 'react-redux';
import dataDishes from '../../data/dataDishes';
import { removeItemFromCart } from '../../redux/cartSlice';

const CartItem = ({cartProp}) => {
    const dishesFind = dataDishes.find( item => item.id === cartProp.dishId);
    const dispatch = useDispatch();

    return(<div>
        <p className='selectedDish'>{dishesFind.name}</p>
        <p>{cartProp.quantity} portion(s)</p>
        <p>Price: ${dishesFind.price * cartProp.quantity}</p>
        <span onClick={ () => dispatch(removeItemFromCart( {cartPropId: cartProp.id} )) }>
            <img src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt='icon' width='20px' /> 
        </span>
    </div>)
}

export default CartItem;
