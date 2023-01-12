import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './reducers/index.js';

// export const initialState = {
//     data: {
//         buns: [],
//         mains: [],
//         sauce: []
//     },
//     constructorData: {
//         bun: {
//             _id: '60d3b41abdacab0026a733c6',
//             name: 'Краторная булка N-200i',
//             type: 'bun',
//             proteins: 80,
//             fat: 24,
//             carbohydrates: 53,
//             calories: 420,
//             price: 1255,
//             image: 'https://code.s3.yandex.net/react/code/bun-02.png',
//             image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
//             image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
//             __v: 0
//           },
//         otrherIng: []
//     },
//     isLoading: false,
//     isApiLoad: false
// }
export const initStore = (initialState) => {
    const store = createStore(RootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
    return store;
};
// const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))