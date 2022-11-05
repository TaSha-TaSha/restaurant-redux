// reducers ЭТО ИНСТРУКЦИЯ ДЛЯ ВСЕХ КОМПОНЕНТОВ !!!!!!!!!!!!!!

import { createSlice } from '@reduxjs/toolkit';

export const dishesSlice = createSlice( {
    name: 'dishes',
    initialState: {
        selectedCategory: 'SEAFOOD'
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
});

export const getSelectedCategory = state => state.dishes.selectedCategory;
export const { filterCategory } = dishesSlice.actions;
export default dishesSlice.reducer




// здесь мы будем говорить про разные категории
// если выбрана эта категория, тогда поменяй цвет
// если не выбрана эта категория, тогда оставь дркгой цвет
// initialState - это первоначальное наше состояние
// reducers - пока оставляем незаполненный, заполним позже



// Create a Redux State Slice
// позволяет нам сначало инициировать наше состояние, то есть сказать чему равно наше первоначальное состояние, а потом его определенным образом менять
// reducers то есть как мы будем менять что-либо, если наши действия совершены


// initialState: {
//     selectedCategory: 'SEAFOOD'
// }, здесь мы хотим, чтобы когда загружалась наша страница, в первую очередь загружалась выбранная категория 'SEAFOOD', прописываем здесь НО применять будем в другом документе

// export default dishesSlice.reducer это запоминаем, это такие настройки

// export const getSelectedCategory = state => state.dishes.selectedCategory;
// здесь создаем const getSelectedCategory приравниваем к state к первоначальному состоянию, далее к name: 'dishes' далее к первоначальному состоянию к initialState: selectedCategory: 'SEAFOOD'

// далее переходим в filter так как там прописываем category и там импортируем этот компонент

// после filter мы продолжаем заполнять dishesSlice reducers и говорим, что
// у нас будет другой компонент в котором мы изменем состояние через action.paylod
// незабываем export const { filterCategory } = dishesSlice.actions; чтобы использовать в другом компоненте
// filterCategory название мы дали сами

// reducers: {
//     filterCategory: (state, action) => {
//         state.selectedCategory = action.payload;
//     }

// то есть как заполнять этот компонент мы берем инструкцию в Create a Redux State Slice




// reducers ЭТО ИНСТРУКЦИЯ ДЛЯ ВСЕХ КОМПОНЕНТОВ !!!!!!!!!!!!!!
