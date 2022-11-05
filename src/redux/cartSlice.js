// reducers ЭТО ИНСТРУКЦИЯ ДЛЯ ВСЕХ КОМПОНЕНТОВ !!!!!!!!!!!!!!

import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice( {
    name: 'cart',
    initialState: {
        cartItemsArray: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            const timeId = new Date().getTime();
            state.cartItemsArray.push( {
                id: timeId,
                // примечание: у Аллы здесь написано dishId: action.payload.dish.id - я думаю, что можно просто dish: проверить в компоненте Dish.js
                dishId: action.payload.dish.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.dish.price
            })
        },
        removeItemFromCart: (state, action) => {
            state.cartItemsArray = state.cartItemsArray.filter( 
                cartProp => cartProp.id !== action.payload.cartPropId
                // здесь cartProp мы взяли из Cart.js там мы работаем со всеми деталями в корзине
            )
        }
    }
});

export const getTotalPrice = state => {
    return state.cart.cartItemsArray.reduce( (total, cartItemsSum) => {
        return cartItemsSum.totalPrice + total
    }, 0);
    // 0 так как счет начинается с 0
    // ниже описан метод reduce
}


export const getSelectedItems = state => state.cart.cartItemsArray;
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer




// этот компонент будет отвечать за корзину
// при клике на кнопку add to car будет добавляться в карзину (массив)


// initialState: {
//     cartItemsArray: []
// }, это первоначальное состояние и это будет массив, то есть что будет добавляться в корзину

// addItemToCart: (state, action) => {
//     state.cartItemsArray.push( {
//         dishId: action.payload.dish.id,
//         quantity: action.payload.quantity
//     })
// } через метод push добавляем объекты в конец массива
// поэтому у нас .push ( {}, ) то есть {} означает объект
// указываем 2 категории по которой будет добавляться товар в корзину, а это по id и по quantity чтобы посчитать количество товара

// как я понимаю, dishId и quantity отражаются в консоли, значит в компоненте Dish.js где при клике на button мы ставим 2 параметра, которые написаны после payload.dish.id и payload.quantity





// Метод reduce это СУММА всех элементов, чтобы сложить количество элементов в корзине, и отобразить общую стоимость
// цена меняется в зависимости от того, что у нас находится в корзине
// https://medium.com/free-code-camp/reduce-f47a7da511a9 
// https://medium.com/@sabih811/javascript-reduce-function-3189cc685201 


// reduce это метод JavaScript
// 2 способа прописание и в одну строчку, и как функция. Как удобно так и пишите
// мы используем этот метод, когда плюсуем одну сумму сс другой
// это метод, который принимает 2 параметра. total и amount. 
// этот метод, который проходит по каждому элементу в массиве
// total это первое число, amount это второе число и каждое последующее число
// этот метод чаще всего используется в корзине, в работе с онлайн магазинами


// ОБЪЯСНЕНИЯ:

// 1) totalPrice: action.payload.quantity * action.payload.dish.price
// в totalPrice мы сначало умножили, чтобы найти цену элементов в корзине, в зависимости от количества элементов в этой корзине


// 2) export const getTotalPrice = state => {
//     return state.cart.cartItemsArray.reduce( (total, cartItemsSum) => {
//         return cartItemsSum.totalPrice + total
//     }, 0);
// }
// далее в const getTotalPrice мы суммируем общуюю сумму всех товаров. 
// нужно побольше разобраться с этим методом


// const timeId = new Date().getTime();
// когда мы работаем с удалением элемент ов из корзины мы очень часто устанавливаем время
// чтобы отследить по секундам, минутам и тд
