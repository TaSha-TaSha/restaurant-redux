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
                dishId: action.payload.dish.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.dish.price
            })
        },
        removeItemFromCart: (state, action) => {
            state.cartItemsArray = state.cartItemsArray.filter( 
                cartProp => cartProp.id !== action.payload.cartPropId
            )
        }
    }
});

export const getTotalPrice = state => {
    return state.cart.cartItemsArray.reduce( (total, cartItemsSum) => {
        return cartItemsSum.totalPrice + total
    }, 0);
}


export const getSelectedItems = state => state.cart.cartItemsArray;
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer

