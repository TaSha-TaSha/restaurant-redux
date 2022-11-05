import { configureStore } from '@reduxjs/toolkit';
import dishes from './dishesSlice';
import cart from './cartSlice';

export const store = configureStore( {
    reducer: {
        dishes,
        cart
    }
});

// store.js нам нужен, чтобы соединить App.js с другими компонентами
// reduser: dishes и cart берем из dishesSlice и cartSlice
