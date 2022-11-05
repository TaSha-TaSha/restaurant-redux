import { useState } from "react";
import { useDispatch } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return(<div>
        <h2>{dish.name}</h2>
        <img src={`./${dish.img}.jpg`} alt='food' width='500px' />
        <p>${dish.price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button onClick={ () => {dispatch(addItemToCart({dish, quantity}))} }>Add To Cart</button>
    </div>)
}

export default Dish;


// <img src={`./${dish.img}.jpg`} width='500px' /> 
// новый способ отображать img
// тогда в dataDishes.js img: '' не забываем кавычки!!!


// интегрируем новый компонеент ChangeQuantity и сосздаем состояние и приравниваем его к 1, чтобы счет начинался с 1
// через пропы передаем quantity и setQuantity

// <button onClick={ () => {dispatch(addItemToCart({dish, quantity}))} } >Add To Cart</button> 
// здесь нужно уточнить ОТКУДА МЫ БЕРЕМ dish, quantity ?????????????