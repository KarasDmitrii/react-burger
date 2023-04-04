import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './reducers/index';
import { socketMiddleware } from './middlewares/socketMiddleware';
import { orderListActions } from './order-list/OrderListActions';
import { TInitState } from '../utils/types';
import { feedActions } from './feed/FeedActions';




const wsOrdersMiddleware = socketMiddleware(orderListActions);
const wsFeedMiddleware = socketMiddleware(feedActions);


export const initStore = (defaultState: TInitState) => {
    const store = createStore(RootReducer, defaultState, composeWithDevTools(applyMiddleware(thunkMiddleware, wsOrdersMiddleware, wsFeedMiddleware)));
    
    return store;
};




