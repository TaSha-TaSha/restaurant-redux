import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory, filterCategory } from '../../redux/dishesSlice';

const Filter = ({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);
    return(<div>
        <p onClick={ () => {dispatch(filterCategory(category))} } className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>{category}</p>
    </div>)
}

export default Filter;


// import { useSelector } from "react-redux"; это ХУК который нам нужен, чтобы прочитать состояние
// import { getSelectedCategory } from '../../redux/dishesSlice'; из dishesSlece
// className скобки фигурные {} вместо '' и для CSS прописываем требования
// после того как мы добавим CSS на кнопки , у нас черный экран и говорит, что Provider не найден. Значит, мы должны добавить в index.js
// после этого все равно экран черный, говорит, что selectedCategory is not defined это значит, что
// нужно в store.js reduser: dishes и интегрировать from dishesSlice
// первоначально состояние мы меняем в dishesSlice в initialState: {selectedCategory: 'SEAFOOD}
// используем хук dispatch также импотритуем filtercategory