import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './reducers/index.js';

export const initStore = (initialState) => {
    const store = createStore(RootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
    return store;
};
