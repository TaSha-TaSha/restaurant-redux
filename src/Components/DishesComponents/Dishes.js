import dataDishes from "../../data/dataDishes";
import Dish from "./Dish";
import { useSelector } from "react-redux";
import { getSelectedCategory } from '../../redux/dishesSlice';

const Dishes = () => {
    const selectedCategory = useSelector(getSelectedCategory)
    return(<div>
        {dataDishes
        .filter( dish => {
            if (selectedCategory === 'ALL') return true;
            return selectedCategory === dish.category;
        })
        .map( (dish, index) => (<Dish dish={dish} key={index} /> ))}
    </div>)
} 

export default Dishes;

// в этом компоненте мы используем метод map так как у нас массив и нам нужно добраться до dataDishes.js
// далее через метод map передаем в компонент <Dish /> через пропсы
// далее после reducers ИНСТРУКЦИИ мы применяем метод filter ко всей нашей базе данных dataDishes
// так же мы получаем доступ к нашей ИНСТРУКЦИИ через const selectedCategory = useSelector(getSelectedCategory);
// не забываем это импортировать:
// import { useSelector } from "react-redux";
// import { getSelectedCategory } from '../../redux/dishesSlice';

// .filter( dish => {
//     return selectedCategory === dish.category;
// }) здесь мы говорим, что верни выбранную категорию которая равняется категории (на каторую мы кликнули), которая есть у нас в базе данных в dataDishes (category: 'ITALIAN' и тд)
// после этого мы должны связать категорию с кликом, для этого нам нужем метод dispatch и применяем его в компоненте Filter.js

// после этого у нас при клике на All все пропадает, значит следующий этап
// мы говорим, если выбранная категория равна All тогда покажи true
// if (selectedCategory === 'ALL') return true;







